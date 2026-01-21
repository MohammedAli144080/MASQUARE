// Navbar scroll shadow
window.addEventListener("scroll",()=>{
  document.querySelector(".navbar")
    .classList.toggle("scrolled",window.scrollY>20);
});

// Mobile menu
const hamburger=document.querySelector(".hamburger");
const navLinks=document.querySelector(".nav-links");

if(hamburger){
  hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
  });
}

// Section reveal animation
const sections=document.querySelectorAll(".animate-section");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{threshold:.1});

sections.forEach(sec=>observer.observe(sec));
