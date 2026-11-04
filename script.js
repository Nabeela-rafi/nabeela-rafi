// Navbar background on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40));

// Mobile menu
const navLinks = document.getElementById("navLinks");
document.getElementById("menuBtn").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));

// Project filters
const buttons = document.querySelectorAll("#filters button");
const projects = document.querySelectorAll(".project");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    projects.forEach((p) => {
      const show = filter === "all" || p.dataset.cat.split(" ").includes(filter);
      p.classList.toggle("hide", !show);
    });
  });
});

// Contact form: opens the visitor's email app with the message filled in
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent(`New project inquiry from ${f.name.value}`);
  const body = encodeURIComponent(`${f.message.value}\n\n— ${f.name.value} (${f.email.value})`);
  window.location.href = `mailto:nabeela1492000@gmail.com?subject=${subject}&body=${body}`;
});

// Reveal sections on scroll
const observer = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("show")),
  { threshold: 0.1 }
);
document.querySelectorAll(".card, .about, .timeline li").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

document.getElementById("year").textContent = new Date().getFullYear();
