/** Поведение шапки, мобильного меню и появления секций. Без UI-библиотек. */

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isHome() {
  return document.body.classList.contains("is-home");
}

function initHeader() {
  const header = document.getElementById("site-header");
  const sentinel = document.getElementById("header-sentinel");
  if (!header || !sentinel) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      header.toggleAttribute("data-compact", !entry.isIntersecting);
    },
    { threshold: 0 },
  );
  io.observe(sentinel);
}

function initHeaderHide() {
  const header = document.getElementById("site-header");
  if (!header || !isHome() || reducedMotion()) return;

  let lastY = window.scrollY;
  let ticking = false;

  const apply = () => {
    const y = window.scrollY;
    const down = y > lastY + 4;
    const up = y < lastY - 4;
    const menuOpen = header.hasAttribute("data-menu-open");

    if (menuOpen || y < 32) {
      header.removeAttribute("data-hidden");
    } else if (down && y > 80) {
      header.setAttribute("data-hidden", "");
    } else if (up) {
      header.removeAttribute("data-hidden");
    }

    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    },
    { passive: true },
  );

  header.addEventListener("focusin", () => {
    header.removeAttribute("data-hidden");
  });
}

function initProgress() {
  const bar = document.getElementById("read-progress-bar");
  if (!bar || !isHome()) return;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    bar.style.transform = `scaleX(${p})`;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initMobileNav() {
  const header = document.getElementById("site-header");
  const btn = document.getElementById("menu-btn");
  const panel = document.getElementById("mobile-nav");
  if (!header || !btn || !panel) return;

  const setOpen = (open: boolean) => {
    header.toggleAttribute("data-menu-open", open);
    btn.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    panel.classList.toggle("hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) header.removeAttribute("data-hidden");
  };

  btn.addEventListener("click", () => {
    setOpen(!header.hasAttribute("data-menu-open"));
  });

  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function initReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!nodes.length) return;

  const show = (el: Element) => {
    el.classList.add("is-in");
    el.querySelectorAll("[data-stagger]").forEach((child, i) => {
      (child as HTMLElement).style.setProperty("--stagger", String(i));
      child.classList.add("is-in");
    });
  };

  if (reducedMotion()) {
    nodes.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.15 },
  );

  nodes.forEach((el) => io.observe(el));
}

function initCounters() {
  const nodes = document.querySelectorAll<HTMLElement>("[data-count]");
  if (!nodes.length) return;

  const reduced = reducedMotion();

  if (!reduced) {
    nodes.forEach((el) => {
      el.textContent = "0";
    });
  }

  const run = (el: HTMLElement) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    if (reduced) {
      el.textContent = String(target);
      return;
    }
    const start = performance.now();
    const duration = 1000;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - p) ** 3;
      el.textContent = String(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        run(entry.target as HTMLElement);
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.4 },
  );

  nodes.forEach((el) => io.observe(el));
}

function initParallax() {
  if (reducedMotion()) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const nodes = document.querySelectorAll<HTMLElement>("[data-parallax]");
  if (!nodes.length) return;

  const max = 6;

  nodes.forEach((el) => {
    const card = el.closest(".group") ?? el.parentElement;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const r = (card as HTMLElement).getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 2 * max;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 2 * max;
      el.style.setProperty("--px", `${x.toFixed(2)}px`);
      el.style.setProperty("--py", `${y.toFixed(2)}px`);
    };

    const onLeave = () => {
      el.style.setProperty("--px", "0px");
      el.style.setProperty("--py", "0px");
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
  });
}

initHeader();
initHeaderHide();
initProgress();
initMobileNav();
initReveal();
initCounters();
initParallax();
