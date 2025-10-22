  // Select all main sections
  const sections = document.querySelectorAll('.hero, .aboutUs, .services, .gallery, .enquiry, .feedback, .footer');

  // Add fade-section class to all
  sections.forEach(section => section.classList.add('fade-section'));

  // Use Intersection Observer to trigger animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, { threshold: 0.2 }); // 20% of section visible triggers fade

  // Observe each section
  sections.forEach(section => observer.observe(section));
