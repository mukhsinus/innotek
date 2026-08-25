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
    const menuOpen = header.hasAttribute("data-menu-open") || header.hasAttribute("data-flyout-open");

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
    panel.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    if (open) header.removeAttribute("data-hidden");
  };

  btn.addEventListener("click", () => {
    setOpen(!header.hasAttribute("data-menu-open"));
  });

  // Mobile Accordion dropdowns
  const accBtns = panel.querySelectorAll<HTMLButtonElement>("[data-mob-accordion-btn]");
  accBtns.forEach((accBtn) => {
    if (accBtn.dataset.mobInit === "true") return;
    accBtn.dataset.mobInit = "true";

    accBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = accBtn.getAttribute("aria-expanded") === "true";
      const targetId = accBtn.getAttribute("aria-controls");
      const content = targetId ? document.getElementById(targetId) : null;
      if (!content) return;

      if (isExpanded) {
        accBtn.setAttribute("aria-expanded", "false");
        content.classList.remove("is-expanded");
      } else {
        accBtn.setAttribute("aria-expanded", "true");
        content.classList.add("is-expanded");
      }
    });
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
  const nodes = document.querySelectorAll<HTMLElement>("[data-count], [data-count-range]");
  if (!nodes.length) return;

  const reduced = reducedMotion();

  const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

  const runSingle = (el: HTMLElement, delay: number = 0) => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    if (reduced) {
      el.textContent = String(target);
      return;
    }

    setTimeout(() => {
      const start = performance.now();
      const duration = 1400;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = easeOutQuart(p);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  };

  const runRange = (el: HTMLElement, delay: number = 0) => {
    const raw = el.dataset.countRange || "";
    const parts = raw.split(",").map((s) => parseFloat(s.trim()));
    if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return;
    const [minTarget, maxTarget] = parts;
    const format = el.dataset.format || "{0}–{1}";

    if (reduced) {
      el.textContent = format
        .replace("{0}", minTarget.toString().replace(".", ","))
        .replace("{1}", maxTarget.toString().replace(".", ","));
      return;
    }

    setTimeout(() => {
      const start = performance.now();
      const duration = 1500;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = easeOutQuart(p);
        const currentMin = (minTarget * eased).toFixed(1).replace(".", ",");
        const currentMax = Math.round(maxTarget * eased).toString();
        el.textContent = format.replace("{0}", currentMin).replace("{1}", currentMax);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const target = entry.target as HTMLElement;
        const idx = Array.from(nodes).indexOf(target);
        const delay = Math.max(0, idx * 120);

        if (target.dataset.countRange) {
          runRange(target, delay);
        } else {
          runSingle(target, delay);
        }
        io.unobserve(target);
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  nodes.forEach((el) => {
    if (!reduced) {
      if (el.dataset.countRange) {
        el.textContent = (el.dataset.format || "{0}–{1}").replace("{0}", "0,0").replace("{1}", "0");
      } else {
        el.textContent = "0";
      }
    }
    io.observe(el);
  });
}

function initSpotlight() {
  if (reducedMotion()) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const cards = document.querySelectorAll<HTMLElement>("[data-spotlight]");
  if (!cards.length) return;

  cards.forEach((card) => {
    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x.toFixed(1)}px`);
      card.style.setProperty("--mouse-y", `${y.toFixed(1)}px`);
    };

    card.addEventListener("mousemove", onMove, { passive: true });
  });
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

function initNavFlyouts() {
  const header = document.getElementById("site-header");
  if (!header) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const CLOSE_MS = 550;
  const panels = new Map<string, HTMLElement>();
  const triggers = [...header.querySelectorAll<HTMLElement>("[data-flyout-trigger]")];

  header.querySelectorAll<HTMLElement>("[data-flyout-panel]").forEach((panel) => {
    const id = panel.dataset.flyoutPanel;
    if (id) panels.set(id, panel);
  });

  if (!panels.size) return;

  let timer = 0;
  let openId: string | null = null;

  const setOpen = (id: string | null) => {
    openId = id;
    header.toggleAttribute("data-flyout-open", Boolean(id));
    if (id) header.removeAttribute("data-hidden");

    panels.forEach((panel, key) => {
      panel.classList.toggle("is-open", key === id);
    });

    triggers.forEach((trigger) => {
      const on = trigger.dataset.flyoutTrigger === id;
      trigger.setAttribute("aria-expanded", String(on));
    });
  };

  const enter = (id: string) => {
    window.clearTimeout(timer);
    setOpen(id);
  };

  const leave = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => setOpen(null), CLOSE_MS);
  };

  const relatedInside = (related: EventTarget | null, id: string) => {
    const node = related instanceof Node ? related : null;
    if (!node) return false;
    const panel = panels.get(id);
    const trigger = triggers.find((el) => el.dataset.flyoutTrigger === id);
    return Boolean((trigger && trigger.contains(node)) || (panel && panel.contains(node)));
  };

  triggers.forEach((trigger) => {
    const id = trigger.dataset.flyoutTrigger;
    if (!id || !panels.has(id)) return;

    trigger.addEventListener("pointerenter", () => enter(id));
    trigger.addEventListener("pointerleave", (e) => {
      if (relatedInside(e.relatedTarget, id)) return;
      leave();
    });
    trigger.addEventListener("focus", () => enter(id));
    trigger.addEventListener("blur", (e) => {
      if (relatedInside(e.relatedTarget, id)) return;
      leave();
    });
  });

  panels.forEach((panel, id) => {
    panel.addEventListener("pointerenter", () => enter(id));
    panel.addEventListener("pointerleave", (e) => {
      if (relatedInside(e.relatedTarget, id)) return;
      leave();
    });
    panel.addEventListener("focusin", () => enter(id));
    panel.addEventListener("focusout", (e) => {
      if (relatedInside(e.relatedTarget, id)) return;
      leave();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && openId) setOpen(null);
  });
}

function initAssemblySequence() {
  const root = document.querySelector<HTMLElement>("[data-assembly-root]");
  if (!root) return;

  const frames = Array.from(root.querySelectorAll<HTMLElement>("[data-assembly-frame]"));
  const buttons = Array.from(root.querySelectorAll<HTMLElement>("[data-assembly-btn]"));
  const counter = document.getElementById("assembly-step-counter");
  if (!frames.length || !buttons.length) return;

  let activeIndex = 0;

  const setActive = (idx: number) => {
    activeIndex = Math.max(0, Math.min(frames.length - 1, idx));
    
    frames.forEach((frame, i) => {
      const isActive = i === activeIndex;
      frame.classList.toggle("is-active", isActive);
      frame.classList.toggle("opacity-100", isActive);
      frame.classList.toggle("opacity-0", !isActive);
      frame.classList.toggle("pointer-events-none", !isActive);
    });

    buttons.forEach((btn, i) => {
      const isActive = i === activeIndex;
      btn.classList.toggle("border-accent", isActive);
      btn.classList.toggle("bg-surface", isActive);
      btn.classList.toggle("border-line", !isActive);
      btn.classList.toggle("bg-transparent", !isActive);
      btn.classList.toggle("opacity-60", !isActive);
    });

    if (counter) {
      counter.textContent = String(activeIndex + 1).padStart(2, "0");
    }
  };

  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => setActive(idx));
  });

  if (reducedMotion()) return;

  // Scroll observer to advance stages smoothly as user scrolls through the assembly section
  const onScroll = () => {
    const rect = root.getBoundingClientRect();
    const totalH = rect.height - window.innerHeight;
    if (totalH <= 0) return;

    const scrolled = -rect.top;
    if (scrolled >= 0 && scrolled <= totalH) {
      const progress = Math.min(0.99, Math.max(0, scrolled / totalH));
      const targetIdx = Math.floor(progress * frames.length);
      if (targetIdx !== activeIndex) {
        setActive(targetIdx);
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
}

function initCatalogAccordions() {
  const flyout = document.getElementById("nav-flyout-catalog");
  if (!flyout) return;

  const toggles = flyout.querySelectorAll<HTMLButtonElement>("[data-cat-accordion-btn]");
  toggles.forEach((btn) => {
    if (btn.dataset.accordionInit === "true") return;
    btn.dataset.accordionInit = "true";

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("aria-controls");
      const content = targetId ? document.getElementById(targetId) : null;
      if (!content) return;

      if (isExpanded) {
        btn.setAttribute("aria-expanded", "false");
        content.classList.remove("is-expanded");
      } else {
        btn.setAttribute("aria-expanded", "true");
        content.classList.add("is-expanded");
      }
    });
  });
}

function initAll() {
  initHeader();
  initHeaderHide();
  initProgress();
  initMobileNav();
  initNavFlyouts();
  initCatalogAccordions();
  initReveal();
  initCounters();
  initSpotlight();
  initParallax();
  initAssemblySequence();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAll);
} else {
  initAll();
}

document.addEventListener("astro:page-load", initAll);


