import { UZ_PATHS } from "../data/site";
import { type Lang, type UiKey, ui } from "./ui";

export function useT(lang: Lang) {
  const dict = ui[lang] ?? ui.ru;
  return (key: UiKey) => dict[key];
}

/** Нормализуем pathname: без /uz, со trailing slash. */
export function stripLocale(pathname: string): string {
  const raw = pathname.replace(/\/uz(?=\/|$)/, "");
  const path = raw === "" ? "/" : raw;
  if (path === "/") return "/";
  return path.endsWith("/") ? path : `${path}/`;
}

export function currentLangFromPath(pathname: string): Lang {
  return pathname === "/uz" || pathname.startsWith("/uz/") ? "uz" : "ru";
}

/**
 * Ссылка в текущем языке.
 * Если uz-версии нет — ведём на русскую страницу (uz-URL не генерируем).
 */
export function hrefFor(lang: Lang, path: string): string {
  const p = stripLocale(path);
  if (lang === "ru") return p;
  if (UZ_PATHS.has(p)) return p === "/" ? "/uz/" : `/uz${p}`;
  return p;
}

/**
 * Переключатель языка: та же страница, если есть пара;
 * иначе uz → главная /uz/, ru → тот же путь без префикса.
 */
export function switchLocalePath(target: Lang, currentPathname: string): string {
  const p = stripLocale(currentPathname);
  if (target === "ru") return p;
  if (UZ_PATHS.has(p)) return p === "/" ? "/uz/" : `/uz${p}`;
  return "/uz/";
}

export function hasUzVersion(path: string): boolean {
  return UZ_PATHS.has(stripLocale(path));
}
