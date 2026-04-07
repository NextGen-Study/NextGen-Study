 
gsap.registerPlugin(ScrollTrigger);


let navbarTimeline = gsap.timeline();

navbarTimeline.from(".navbarLogo", {
  y: -100,
  opacity: 0,
  duration: 0.5,
});

navbarTimeline.from(".navbarButtons a", {
  y: 100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.2,
});

gsap.to(".img1", {
  y : 10,
  duration: 1,
  repeat: -1,
  yoyo: true
})
gsap.from(".heroText", {
  opacity: 0,
  duration: 0.3,
  y: 50,
})


gsap.to(".highlight", {
  yPercent: -100 * 7,
  duration: 10,
  ease: "none",  
  repeat: -1
});

const sections = document.querySelectorAll("#scroll-text");

gsap.to(".scroll-container", {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: () => "+=" + (sections.length * window.innerWidth),
    pin: true,
    scrub: 1
  }
});
document.body.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    duration: 0.3,
    x: e.clientX,
    y: e.clientY,
  });
});

  function toggleMenu() {
const menuBtn = document.querySelector('.menuButton');
const menuLinks = document.querySelector('.menuLinks');
const links = document.querySelectorAll('.menuLinks a');
menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle('active');
  menuLinks.classList.toggle('active');
});
links.forEach(link => {
  link.addEventListener('click', () => {
    menuLinks.classList.remove('active');
    menuBtn.classList.remove('active');
  });
});
  }

  toggleMenu();

  