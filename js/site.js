$(document).ready(function() {
    var count = 0; 
    var maxDelay = 1500;
    var minSpeed = 1500;
    var maxSpeed = 1000;
    var fadeTo = 1;
    
    $('div span').each(function(){
        var delay = Math.ceil(Math.random() * maxDelay);
        var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
        count++;
        $(this).delay(delay).fadeTo(speed, fadeTo, function(){
            count--;
            if (count == 0){
                onFinish();
            }
        });
    });
    
    function onFinish() {
       //alert('fin');
    }   
});

// Introduction page navigation
document.addEventListener('DOMContentLoaded', function() {
  const introNav = document.querySelector('.two-column-nav');
  if (!introNav) return;

  const navLinks = introNav.querySelectorAll('a');
  const contentSections = document.querySelectorAll('.content-section');

  function showContent(targetId) {
    // Remove active class from all links and sections
    navLinks.forEach(l => l.classList.remove('active'));
    contentSections.forEach(s => s.classList.remove('active'));
    
    // Add active class to clicked link
    const activeLink = document.querySelector(`a[href="#${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    
    // Show corresponding content section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  }

  // Set up click handlers
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      showContent(targetId);
    });
  });

  // Show initial content based on URL hash or default to 'anyone'
  const hash = window.location.hash.substring(1);
  showContent(hash || 'anyone');
});
