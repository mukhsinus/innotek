/** Поведение шапки, мобильного меню и появления секций. Без UI-библиотек. */

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

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  );

  nodes.forEach((el) => io.observe(el));
}

initHeader();
initMobileNav();
initReveal();
