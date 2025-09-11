// Graduation Application Form Submission
document.addEventListener('DOMContentLoaded', function() {
  var gradForm = document.getElementById('graduationApplyForm');
  var gradMsg = document.getElementById('graduationApplyMsg');
  if (gradForm && gradMsg) {
    gradForm.addEventListener('submit', function(e) {
      e.preventDefault();
      gradMsg.classList.remove('d-none');
      gradForm.reset();
      setTimeout(function() {
        gradMsg.classList.add('d-none');
      }, 5000);
    });
  }
});
// Registrar Services Modal Interactivity
document.addEventListener('DOMContentLoaded', function() {
  var serviceDetails = {
    registration: {
      title: 'Student Registration and Enrollment',
      body: 'Register for courses, update your enrollment status, and access all forms needed for new and returning students. Our office guides you through every step of the registration process.'
    },
    records: {
      title: 'Academic Records and Transcripts',
      body: 'Request official transcripts, verify your academic records, and get help with corrections or updates. Secure and confidential handling of all student records.'
    },
    scheduling: {
      title: 'Course Scheduling and Catalog',
      body: 'View the latest course catalog, check class schedules, and get assistance with course selection and registration deadlines.'
    },
    graduation: {
      title: 'Graduation and Certification Processing',
      body: 'Apply for graduation, track your progress, and receive your certificates and diplomas. We ensure all requirements are met for a smooth graduation process.'
    },
    support: {
      title: 'Support for Students, Faculty, and Alumni',
      body: 'Get help with registration, records, and academic policies. Our team supports students, faculty, and alumni with all registrar-related needs.'
    }
  };
  var links = document.querySelectorAll('.registrar-link');
  var modal = document.getElementById('registrarModal');
  var modalTitle = document.getElementById('registrarModalLabel');
  var modalBody = document.getElementById('registrarModalBody');
  if (links && modal && modalTitle && modalBody) {
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var key = this.getAttribute('data-service');
        if (serviceDetails[key]) {
          modalTitle.textContent = serviceDetails[key].title;
          modalBody.textContent = serviceDetails[key].body;
          var bsModal = new bootstrap.Modal(modal);
          bsModal.show();
        }
      });
    });
  }
});
// UDS-style Navbar: Dropdown on hover for desktop
document.addEventListener('DOMContentLoaded', function() {
  if(window.innerWidth >= 992) {
    document.querySelectorAll('.navbar .dropdown').forEach(function(dropdown) {
      dropdown.addEventListener('mouseenter', function() {
        const menu = this.querySelector('.dropdown-menu');
        if(menu) menu.classList.add('show');
      });
      dropdown.addEventListener('mouseleave', function() {
        const menu = this.querySelector('.dropdown-menu');
        if(menu) menu.classList.remove('show');
      });
    });
  }
});
  // === News & Events Modal Logic ===
  function handleNewsDetailClick(e) {
    e.preventDefault();
    let trigger = e.currentTarget;
    document.getElementById('newsDetailModalLabel').textContent = trigger.dataset.title;
    document.getElementById('newsDetailImg').src = trigger.dataset.img;
    document.getElementById('newsDetailImg').alt = trigger.dataset.title;
    document.getElementById('newsDetailDate').textContent = trigger.dataset.date;
    document.getElementById('newsDetailContent').textContent = trigger.dataset.content;
    const modalEl = document.getElementById('newsDetailModal');
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
    // Restore focus to the trigger after modal closes
    modalEl.addEventListener('hidden.bs.modal', function restoreFocus() {
      trigger.focus();
      modalEl.removeEventListener('hidden.bs.modal', restoreFocus);
    });
  }
  document.querySelectorAll('.news-detail-trigger').forEach(item => {
    item.addEventListener('click', handleNewsDetailClick);
    item.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleNewsDetailClick.call(this, e);
      }
    });
  });
// === UDS-Style Hero Slideshow ===
document.addEventListener('DOMContentLoaded', function() {
  const heroSlides = document.querySelectorAll('.uds-hero-slide');
  let heroCurrent = 0;
  let heroInterval = null;
  function showHeroSlide(idx) {
    heroSlides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
    heroCurrent = idx;
  }
  function nextHeroSlide() { showHeroSlide((heroCurrent + 1) % heroSlides.length); }
  function prevHeroSlide() { showHeroSlide((heroCurrent - 1 + heroSlides.length) % heroSlides.length); }
  function startHeroAuto() { heroInterval = setInterval(nextHeroSlide, 3000); }
  function stopHeroAuto() { clearInterval(heroInterval); }
  if (heroSlides.length > 0) {
    showHeroSlide(0);
    startHeroAuto();
  // Navigation buttons removed; auto only
    document.querySelector('.uds-hero-slideshow').addEventListener('mouseenter', stopHeroAuto);
    document.querySelector('.uds-hero-slideshow').addEventListener('mouseleave', startHeroAuto);
  }

  // === UDS-Style About Slideshow ===
  const aboutSlides = document.querySelectorAll('.uds-about-slide');
  let aboutCurrent = 0;
  let aboutInterval = null;
  function showAboutSlide(idx) {
    aboutSlides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
    aboutCurrent = idx;
  }
  function nextAboutSlide() { showAboutSlide((aboutCurrent + 1) % aboutSlides.length); }
  function prevAboutSlide() { showAboutSlide((aboutCurrent - 1 + aboutSlides.length) % aboutSlides.length); }
  function startAboutAuto() { aboutInterval = setInterval(nextAboutSlide, 3000); }
  function stopAboutAuto() { clearInterval(aboutInterval); }
  if (aboutSlides.length > 0) {
    showAboutSlide(0);
    startAboutAuto();
  // Navigation buttons removed; auto only
    document.querySelector('.uds-about-slideshow').addEventListener('mouseenter', stopAboutAuto);
    document.querySelector('.uds-about-slideshow').addEventListener('mouseleave', startAboutAuto);
  }
  // === News & Events Modal Logic ===
  const newsTriggers = document.querySelectorAll('.news-detail-trigger');
  const newsModal = document.getElementById('newsDetailModal');
  if (newsTriggers.length && newsModal) {
    newsTriggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('newsDetailModalLabel').textContent = this.dataset.title;
        document.getElementById('newsDetailImg').src = this.dataset.img;
        document.getElementById('newsDetailImg').alt = this.dataset.title;
        document.getElementById('newsDetailDate').textContent = this.dataset.date;
        document.getElementById('newsDetailContent').textContent = this.dataset.content;
        // Bootstrap 5 modal show
        const modal = new bootstrap.Modal(newsModal);
        modal.show();
      });
    });
  }
});
// === Hero Slideshow for Homepage ===
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');
  let current = 0;
  let interval = null;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAuto() {
    interval = setInterval(nextSlide, 5000);
  }
  function stopAuto() {
    clearInterval(interval);
  }

  if (slides.length > 0) {
    showSlide(0);
    startAuto();
    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => { nextSlide(); stopAuto(); startAuto(); });
      prevBtn.addEventListener('click', () => { prevSlide(); stopAuto(); startAuto(); });
    }
    document.querySelector('.hero-slideshow').addEventListener('mouseenter', stopAuto);
    document.querySelector('.hero-slideshow').addEventListener('mouseleave', startAuto);
  }
});
// Interactive FAQ Sidebar for Finance Page
document.addEventListener('DOMContentLoaded', function() {
  const faqSidebar = document.getElementById('financeFAQSidebar');
  if (faqSidebar) {
    faqSidebar.querySelectorAll('.faq-toggle').forEach(btn => {
      btn.addEventListener('click', function() {
        const answer = btn.nextElementSibling;
        if (answer.classList.contains('show')) {
          answer.classList.remove('show');
          answer.classList.add('collapse');
        } else {
          // Close all others
          faqSidebar.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));
          answer.classList.add('show');
          answer.classList.remove('collapse');
        }
      });
    });
  }
});
// Faculty Card Modal Logic
document.addEventListener('DOMContentLoaded', function() {
  const facultyCards = document.querySelectorAll('.faculty-card');
  facultyCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remove any existing modal
      document.querySelectorAll('.faculty-details-modal').forEach(m => m.remove());
      const details = card.querySelector('.faculty-details').innerHTML;
      const modal = document.createElement('div');
      modal.className = 'faculty-details-modal';
      modal.innerHTML = `
        <div class="faculty-details-content position-relative">
          <span class="faculty-details-close" title="Close">&times;</span>
          ${details}
        </div>
      `;
      document.body.appendChild(modal);
      modal.querySelector('.faculty-details-close').onclick = () => modal.remove();
      modal.onclick = e => { if (e.target === modal) modal.remove(); };
    });
  });
});
// Dropdown hover (for desktop)

// Accessibility & Interactivity for Navbar Dropdowns
document.addEventListener('DOMContentLoaded', function () {
  // Dropdown hover (desktop)
  var dropdowns = document.querySelectorAll('.navbar .dropdown');
  dropdowns.forEach(function (dropdown) {
    // Hover (desktop)
    dropdown.addEventListener('mouseenter', function () {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      if (menu) menu.classList.add('show');
      if (toggle) toggle.setAttribute('aria-expanded', 'true');
    });
    dropdown.addEventListener('mouseleave', function () {
      var menu = this.querySelector('.dropdown-menu');
      var toggle = this.querySelector('.dropdown-toggle');
      if (menu) menu.classList.remove('show');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });

    // Click/tap (mobile/touch)
    var toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', function (e) {
        var menu = dropdown.querySelector('.dropdown-menu');
        var isOpen = menu.classList.contains('show');
        // Close all other open dropdowns
        document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function (openMenu) {
          if (openMenu !== menu) openMenu.classList.remove('show');
        });
        menu.classList.toggle('show', !isOpen);
        toggle.setAttribute('aria-expanded', String(!isOpen));
        e.preventDefault();
        e.stopPropagation();
      });
    }
  });

  // Close dropdowns on outside click
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.navbar .dropdown-menu.show').forEach(function (menu) {
      menu.classList.remove('show');
      var parent = menu.closest('.dropdown');
      if (parent) {
        var toggle = parent.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Keyboard accessibility for dropdowns
  document.querySelectorAll('.navbar .dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('keydown', function (e) {
      var menu = this.parentElement.querySelector('.dropdown-menu');
      if (!menu) return;
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        menu.classList.add('show');
        this.setAttribute('aria-expanded', 'true');
        var firstItem = menu.querySelector('.dropdown-item');
        if (firstItem) firstItem.focus();
        e.preventDefault();
      } else if (e.key === 'Escape') {
        menu.classList.remove('show');
        this.setAttribute('aria-expanded', 'false');
        this.focus();
        e.preventDefault();
      }
    });
  });

  // Keyboard navigation inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
    menu.addEventListener('keydown', function (e) {
      var items = Array.from(menu.querySelectorAll('.dropdown-item'));
      var index = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') {
        if (index < items.length - 1) items[index + 1].focus();
        else items[0].focus();
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        if (index > 0) items[index - 1].focus();
        else items[items.length - 1].focus();
        e.preventDefault();
      } else if (e.key === 'Escape') {
        menu.classList.remove('show');
        var parentDropdown = menu.closest('.dropdown');
        if (parentDropdown) {
          var toggle = parentDropdown.querySelector('.dropdown-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
          if (toggle) toggle.focus();
        }
        e.preventDefault();
      }
    });
  });

  // Scroll to Top Button
  const scrollBtn = document.getElementById('scrollToTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
