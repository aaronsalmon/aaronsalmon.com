// Wrap in a function to prevent variable redeclaration
function initTwoColumnNav() {
  const links = document.querySelectorAll('.two-column-nav a');
  const sections = document.querySelectorAll('.content-section');

  // Handle click events
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links and sections
      links.forEach(l => l.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Show corresponding section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add('active');

      // Scroll to the h2 element of the active section
      const h2 = targetSection.querySelector('h2');
      if (h2) {
        const offset = 100; // Offset from top of viewport
        const elementPosition = h2.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTwoColumnNav);
} else {
  initTwoColumnNav();
} 