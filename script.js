const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

burger.onclick = () => nav.classList.toggle("show");

window.addEventListener("scroll", () => {
  document.querySelector(".navbar").style.background =
    window.scrollY > 50 ? "rgba(0,0,0,.7)" : "rgba(0,0,0,.4)";
});

links.forEach(link => {
  link.onclick = () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    nav.classList.remove("show");
  };
});
