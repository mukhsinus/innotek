# -*- coding: utf-8 -*-
"""
Сбор всего контента innotek.uz в папку content/ (markdown + метаданные)
и карту старых URL (urls.csv) для 301-редиректов.

Установка зависимостей:
    pip install requests beautifulsoup4 markdownify lxml

Запуск:
    python scrape_innotek.py
"""

import csv
import os
import re
import time
from urllib.parse import urljoin, urlparse, unquote

import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md

BASE = "https://innotek.uz"
OUT_DIR = "content"
HEADERS = {"User-Agent": "Mozilla/5.0 (site migration bot; owner request)"}
DELAY = 1.0  # пауза между запросами, чтобы не нагружать сайт
SKIP_EXT = (
    ".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".bmp", ".tif", ".tiff",
    ".svg", ".ico", ".pdf", ".zip", ".rar", ".7z", ".mp4", ".mp3", ".webm",
    ".css", ".js", ".woff", ".woff2", ".ttf", ".eot", ".xml", ".txt", ".json",
)

session = requests.Session()
session.headers.update(HEADERS)


def is_html_page(url):
    """Отсекаем медиа, uploads и служебные URL до запроса."""
    p = urlparse(url)
    path = unquote(p.path).lower()
    if "/wp-content/uploads/" in path:
        return False
    if "/wp-admin" in path or "/wp-login" in path or "/wp-json" in path:
        return False
    if path.endswith("/feed") or path.endswith("/feed/") or "/feed/" in path:
        return False
    if path.endswith(SKIP_EXT):
        return False
    return p.netloc == urlparse(BASE).netloc


def get(url):
    r = session.get(url, timeout=30)
    r.raise_for_status()
    return r


def urls_from_sitemap():
    """Пробуем стандартные адреса sitemap у WordPress."""
    candidates = [
        f"{BASE}/sitemap_index.xml",
        f"{BASE}/wp-sitemap.xml",
        f"{BASE}/sitemap.xml",
    ]
    found = set()
    for sm in candidates:
        try:
            r = get(sm)
        except Exception:
            continue
        soup = BeautifulSoup(r.text, "xml")
        locs = [loc.text.strip() for loc in soup.find_all("loc")]
        # это может быть индекс вложенных sitemap'ов
        sub_maps = [u for u in locs if u.endswith(".xml")]
        pages = [u for u in locs if not u.endswith(".xml") and is_html_page(u)]
        found.update(pages)
        for sub in sub_maps:
            # image/video sitemap содержит файлы, не страницы
            if re.search(r"image|video|news", sub, re.I):
                continue
            try:
                rs = get(sub)
                ssoup = BeautifulSoup(rs.text, "xml")
                found.update(
                    loc.text.strip()
                    for loc in ssoup.find_all("loc")
                    if not loc.text.strip().endswith(".xml")
                    and is_html_page(loc.text.strip())
                )
                time.sleep(DELAY)
            except Exception:
                pass
        if found:
            break
    return found


def urls_by_crawl(max_pages=300):
    """Запасной вариант: обход внутренних ссылок с главной."""
    seen, queue, pages = set(), [BASE + "/"], set()
    while queue and len(pages) < max_pages:
        url = queue.pop(0)
        if url in seen or not is_html_page(url):
            continue
        seen.add(url)
        try:
            r = get(url)
        except Exception:
            continue
        if "text/html" not in r.headers.get("Content-Type", "").lower():
            continue
        pages.add(url)
        soup = BeautifulSoup(r.text, "lxml")
        for a in soup.find_all("a", href=True):
            u = urljoin(url, a["href"]).split("#")[0].split("?")[0]
            if is_html_page(u) and u not in seen:
                queue.append(u)
        time.sleep(DELAY)
    return pages


def slug_for(url):
    path = unquote(urlparse(url).path).strip("/")
    if not path:
        return "index"
    slug = re.sub(r"[^\w\-а-яА-ЯёЁoʻOʻ]+", "-", path, flags=re.U).strip("-")
    return slug[:120] or "page"


def extract(url, html):
    soup = BeautifulSoup(html, "lxml")

    title = soup.title.text.strip() if soup.title else ""
    desc_tag = soup.find("meta", attrs={"name": "description"})
    description = desc_tag["content"].strip() if desc_tag and desc_tag.get("content") else ""
    lang = "uz" if "/uz/" in url or url.rstrip("/").endswith("/uz") else "ru"
    h1 = soup.find("h1")
    h1_text = h1.get_text(" ", strip=True) if h1 else ""

    # выкидываем служебные блоки (svg часто даёт слишком глубокое дерево)
    for sel in ["header", "footer", "nav", "script", "style", "noscript",
                "form", "iframe", "svg"]:
        for t in soup.find_all(sel):
            t.decompose()

    # основной контент: типичные контейнеры WP-тем
    main = (soup.find("main")
            or soup.find(id=re.compile("content|main", re.I))
            or soup.find("div", class_=re.compile("content|entry|page", re.I))
            or soup.body)

    # собираем ссылки на картинки (сами файлы не качаем)
    images = []
    if main:
        for img in main.find_all("img"):
            src = img.get("src") or img.get("data-src") or ""
            if src and "dummy" not in src:
                images.append(urljoin(url, src))

    body_md = ""
    if main:
        try:
            body_md = md(str(main), heading_style="ATX", strip=["img", "svg"])
        except RecursionError:
            # бинарные файлы / слишком глубокий HTML
            body_md = main.get_text("\n", strip=True)
    body_md = re.sub(r"\n{3,}", "\n\n", body_md).strip()

    return title, description, lang, h1_text, body_md, images


def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    urls = urls_from_sitemap()
    if not urls:
        print("Sitemap не найден, перехожу на обход ссылок...")
        urls = urls_by_crawl()
    urls = sorted(urls)
    print(f"Найдено страниц: {len(urls)}")

    rows = []
    for i, url in enumerate(urls, 1):
        if not is_html_page(url):
            print(f"[{i}/{len(urls)}] ПРОПУСК (не страница) {url}")
            continue
        try:
            r = get(url)
        except Exception as e:
            print(f"[{i}/{len(urls)}] ПРОПУСК {url}: {e}")
            continue
        ctype = r.headers.get("Content-Type", "").lower()
        if "text/html" not in ctype:
            print(f"[{i}/{len(urls)}] ПРОПУСК (не HTML) {url}")
            continue
        try:
            title, description, lang, h1, body, images = extract(url, r.text)
        except Exception as e:
            print(f"[{i}/{len(urls)}] ПРОПУСК {url}: {e}")
            continue
        slug = slug_for(url)
        fname = os.path.join(OUT_DIR, f"{slug}.md")

        with open(fname, "w", encoding="utf-8") as f:
            f.write("---\n")
            f.write(f'old_url: "{url}"\n')
            f.write(f'lang: "{lang}"\n')
            f.write(f'title: "{title.replace(chr(34), chr(39))}"\n')
            f.write(f'description: "{description.replace(chr(34), chr(39))}"\n')
            f.write(f'h1: "{h1.replace(chr(34), chr(39))}"\n')
            if images:
                f.write("images:\n")
                for im in images[:20]:
                    f.write(f'  - "{im}"\n')
            f.write("---\n\n")
            f.write(body + "\n")

        rows.append([url, lang, title, fname])
        print(f"[{i}/{len(urls)}] OK {url} -> {fname}")
        time.sleep(DELAY)

    with open("urls.csv", "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(["old_url", "lang", "title", "file"])
        w.writerows(rows)

    print(f"\nГотово: {len(rows)} страниц в ./{OUT_DIR}/, карта URL в urls.csv")


if __name__ == "__main__":
    main()
