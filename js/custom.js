
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    
  })(window.jQuery);

  document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Swipe technique
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.wraps-scroll-container');
    const scrollRight = document.getElementById('scroll-right');
    const scrollLeft = document.getElementById('scroll-left');

    const scrollAmount = 320; // Adjust scroll distance as needed

    scrollRight.addEventListener('click', function () {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    scrollLeft.addEventListener('click', function () {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});


