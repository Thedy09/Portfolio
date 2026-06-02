const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const closeNav = () => {
  if (!nav || !menuBtn) return;
  nav.classList.remove("is-open");
  menuBtn.setAttribute("aria-expanded", "false");
};

if (nav && menuBtn) {
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

const onScroll = () => {
  if (header) {
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
