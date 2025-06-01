
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


// Swipe technique (multi-section support)
document.addEventListener("DOMContentLoaded", function () {
    const scrollWrappers = document.querySelectorAll('.wraps-scroll-wrapper');

    scrollWrappers.forEach(wrapper => {
        const container = wrapper.querySelector('.wraps-scroll-container');
        const scrollLeft = wrapper.querySelector('.scroll-left');
        const scrollRight = wrapper.querySelector('.scroll-right');
        const scrollAmount = 320;

        if (scrollRight) {
            scrollRight.addEventListener('click', () => {
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        if (scrollLeft) {
            scrollLeft.addEventListener('click', () => {
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    });
});



