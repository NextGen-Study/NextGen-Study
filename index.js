  function fadeAnimation() {
  const sections = document.querySelectorAll('.heroText, .aboutUsText, .aboutUsHeading, .serviceText, .serviceCards, .carousel basic, .enquiryText, .enquiryContainer, .feedbackText');

  
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

  const subjects = [
      "Web Development",
      "Python Programming",
      "C++",
      "Data Structures",
      "Java",
      "Accountancy",
      "Economics",
      "Mathematics",
      "Physics",
      "Chemistry",
      "English",
      "Digital Marketing",
      "Graphic Design"
    ];

     const typedText = document.getElementById("typedText");
    let subjectIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;

    function typeAnimation() {
      const currentSubject = subjects[subjectIndex];

      if (!isDeleting) {
        typedText.textContent = currentSubject.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentSubject.length) {
          isDeleting = true;
          setTimeout(typeAnimation, 1000);
          return;
        }
      } else {
        typedText.textContent = currentSubject.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          subjectIndex = (subjectIndex + 1) % subjects.length;
        }
      }

      const delay = isDeleting ? 60 : typingSpeed;
      setTimeout(typeAnimation, delay);
    }

    document.addEventListener("DOMContentLoaded", typeAnimation);