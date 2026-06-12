/* ============================================================
   Yuri Souza — Portfolio 2.0 · scroll engine (scoped to a root element)
   Ported from the original app.js. Call inside a useEffect with the
   section's root node; it returns a cleanup function.
   ============================================================ */
export function initDevScrollEngine(root) {
  if (!root) return () => {};

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Build the statement words ---------- */
  const statementEl = root.querySelector("#statement");
  let statementWords = [];
  if (statementEl) {
    statementEl.textContent = ""; // guard against StrictMode double-invoke
    const raw = statementEl.dataset.text || "";
    const frag = document.createDocumentFragment();
    raw.split(/(\|[^|]*\|)/).forEach((seg) => {
      if (!seg) return;
      const accent = seg.startsWith("|") && seg.endsWith("|");
      const clean = accent ? seg.slice(1, -1) : seg;
      clean.split(/\s+/).filter(Boolean).forEach((word) => {
        const span = document.createElement("span");
        span.className = "w" + (accent ? " accent" : "");
        span.textContent = word;
        frag.appendChild(span);
      });
    });
    statementEl.appendChild(frag);
    statementWords = Array.from(statementEl.querySelectorAll(".w"));
  }

  /* ---------- Pin progress helper ---------- */
  function pinProgress(el) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height - vh;
    if (total <= 0) return 0;
    return clamp(-rect.top / total, 0, 1);
  }

  const heroWrap = root.querySelector('[data-pin="hero"]');
  const heroContent = root.querySelector("#heroContent");
  const heroGlow = root.querySelector("#heroGlow");
  const heroCue = root.querySelector("#heroCue");

  const statementWrap = root.querySelector('[data-pin="statement"]');

  const projectsWrap = root.querySelector('[data-pin="projects"]');
  const projTrack = root.querySelector("#projTrack");
  const projBar = root.querySelector("#projBar");

  const nav = root.querySelector("#nav");
  const scrollBar = root.querySelector("#scrollBar");
  const expFill = root.querySelector("#expFill");
  const expSection = root.querySelector("#experiencia");

  /* ---------- Size the projects pin so vertical scroll == horizontal travel ---------- */
  function sizeProjects() {
    if (!projectsWrap || !projTrack) return;
    const lastCard = projTrack.querySelector(".proj-card:last-child");
    const vw = window.innerWidth;
    // translate until the center of the last card sits at the center of the viewport
    const targetOffset = lastCard
      ? Math.max(0, lastCard.offsetLeft + lastCard.offsetWidth / 2 - vw / 2)
      : Math.max(0, projTrack.scrollWidth - vw);
    projectsWrap.style.height = window.innerHeight + targetOffset + "px";
    projectsWrap.dataset.overflow = targetOffset;
  }

  /* ---------- Main update loop ---------- */
  let ticking = false;
  function update() {
    ticking = false;
    const y = window.scrollY || window.pageYOffset;
    const docH = document.documentElement.scrollHeight - window.innerHeight;

    if (scrollBar) scrollBar.style.transform = "scaleX(" + clamp(y / (docH || 1), 0, 1) + ")";
    if (nav) nav.classList.toggle("scrolled", y > 40);

    if (heroWrap && heroContent) {
      const p = pinProgress(heroWrap);
      if (!reduceMotion) {
        const scale = 1 + p * 1.35;
        const blur = p * 14;
        const opacity = clamp(1 - p * 1.55, 0, 1);
        heroContent.style.transform = "scale(" + scale + ")";
        heroContent.style.filter = "blur(" + blur + "px)";
        heroContent.style.opacity = opacity;
        if (heroGlow) {
          heroGlow.style.transform = "scale(" + (1 + p * 1.4) + ")";
          heroGlow.style.opacity = lerp(0.55, 0.15, p);
        }
      }
      if (heroCue) heroCue.style.opacity = clamp(1 - p * 4, 0, 1);
    }

    if (statementWrap && statementWords.length) {
      const p = pinProgress(statementWrap);
      const lit = clamp(p / 0.85, 0, 1) * statementWords.length;
      for (let i = 0; i < statementWords.length; i++) {
        statementWords[i].classList.toggle("lit", i < lit);
      }
    }

    if (projectsWrap && projTrack) {
      const overflow = parseFloat(projectsWrap.dataset.overflow || "0");
      const p = pinProgress(projectsWrap);
      projTrack.style.transform = "translate3d(" + -p * overflow + "px,0,0)";
      if (projBar) projBar.style.width = (p * 100).toFixed(2) + "%";
    }

    if (expFill && expSection) {
      const rect = expSection.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.8;
      const end = vh * 0.3;
      const prog = clamp((start - rect.top) / (rect.height - (start - end)), 0, 1);
      expFill.style.height = (prog * 100).toFixed(1) + "%";
    }

    checkReveals();
    checkNav();
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  /* ---------- Reveal + counters (IntersectionObserver) ---------- */
  function runCounter(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const valEl = el.querySelector(".val");
    if (!valEl) return;
    const dur = 1200;
    const t0 = performance.now();
    function step(now) {
      const t = clamp((now - t0) / dur, 0, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      valEl.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
  root.querySelectorAll(".reveal, .exp-item").forEach((el) => revealObserver.observe(el));

  const revealRightObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealRightObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -25% 0px" }
  );
  root.querySelectorAll(".reveal-right").forEach((el) => revealRightObserver.observe(el));

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  root.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

  function checkReveals() { /* handled by IntersectionObserver */ }

  /* ---------- Active nav link ---------- */
  const navLinks = Array.from(root.querySelectorAll("#navLinks a"));
  const navSections = ["sobre", "stack", "projetos", "experiencia", "certificacoes"]
    .map((id) => ({ id, el: root.querySelector("#" + id), link: navLinks.find((a) => a.getAttribute("href") === "#" + id) }))
    .filter((s) => s.el && s.link);
  let activeId = null;
  function checkNav() {
    const mid = window.innerHeight * 0.4;
    let current = null;
    for (const s of navSections) {
      if (s.el.getBoundingClientRect().top <= mid) current = s;
    }
    const id = current ? current.id : null;
    if (id !== activeId) {
      activeId = id;
      navLinks.forEach((l) => l.classList.remove("active"));
      if (current) current.link.classList.add("active");
    }
  }

  /* ---------- Smooth anchor scroll (no scrollIntoView) ---------- */
  const anchors = Array.from(root.querySelectorAll('a[href^="#"]'));
  function onAnchorClick(ev) {
    const a = ev.currentTarget;
    const id = a.getAttribute("href").slice(1);
    const target = id ? root.querySelector("#" + id) : null;
    if (target) {
      ev.preventDefault();
      const y = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
      window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
    }
  }
  anchors.forEach((a) => a.addEventListener("click", onAnchorClick));

  /* ---------- Image load -> resize ---------- */
  if (projTrack) {
    projTrack.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", () => { sizeProjects(); onScroll(); }, { once: true });
    });
  }

  /* ---------- Init + listeners ---------- */
  function init() { sizeProjects(); update(); }
  const onResize = () => { sizeProjects(); onScroll(); };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  init();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => { sizeProjects(); onScroll(); });
  }

  /* ---------- Cleanup ---------- */
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
    anchors.forEach((a) => a.removeEventListener("click", onAnchorClick));
    revealObserver.disconnect();
    revealRightObserver.disconnect();
    counterObserver.disconnect();
  };

}
