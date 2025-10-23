  function fadeAnimation() {
  const sections = document.querySelectorAll('.hero, .aboutUs, .services, .gallery, .enquiry, .feedback, .footer');

  
  sections.forEach(section => section.classList.add('fade-section'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.1 }); 

  sections.forEach(section => observer.observe(section));
  }

  fadeAnimation();


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