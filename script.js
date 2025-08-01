// Simple Slideshow and Dropdown Hover
const slideshowImages = [
  { src: 'images/header1.jpg', text: 'Empowering Liberia’s Future' },
  { src: 'images/header2.jpg', text: 'Build Your Career with Us' },
  { src: 'images/header3.jpg', text: 'Join a Global Learning Community' }
];

let currentSlide = 0;

document.addEventListener('DOMContentLoaded', () => {
  // Slideshow
  const heroSection = document.querySelector('.hero-section');
  const heroText = document.querySelector('.hero-section h2, .hero-section h3, .hero-section h4');

  function showSlide(index) {
    const slide = slideshowImages[index];
    if (heroSection) {
      heroSection.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${slide.src})`;
    }
    if (heroText) {
      heroText.innerText = slide.text;
    }
  }

  if (heroSection) {
    showSlide(currentSlide);
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideshowImages.length;
      showSlide(currentSlide);
    }, 4000);
  }

  // Dropdown hover
  var dropdowns = document.querySelectorAll('.navbar .dropdown');
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('mouseenter', function() {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      if (menu) menu.classList.add('show');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
    });
    dropdown.addEventListener('mouseleave', function() {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      if (menu) menu.classList.remove('show');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  });
});