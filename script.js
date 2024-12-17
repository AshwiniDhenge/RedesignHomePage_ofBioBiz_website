// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70, // Adjust for fixed navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Back-to-Top Button
  const backToTopButton = document.createElement('button');
  backToTopButton.classList.add('btn', 'btn-primary', 'back-to-top');
  backToTopButton.textContent = '↑';
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form Validation
  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Your Name"]');
    const email = this.querySelector('input[placeholder="Your Email"]');
    const message = this.querySelector('textarea');
  
    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill out all fields before submitting!');
    } else {
      alert('Thank you for your message!');
      this.reset();
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
      // Initialize Bootstrap carousel
      const carousel = new bootstrap.Carousel(document.querySelector('#heroCarousel'), {
          interval: 3000,
          wrap: true,
          touch: true
      });

      // Optional: Pause carousel on hover
      document.querySelector('#heroCarousel').addEventListener('mouseenter', function() {
          carousel.pause();
      });

      document.querySelector('#heroCarousel').addEventListener('mouseleave', function() {
          carousel.cycle();
      });

      // Navbar scroll effect
      window.addEventListener('scroll', function() {
          const navbar = document.querySelector('.custom-navbar');
          if (window.scrollY > 50) {
              navbar.classList.add('scrolled');
          } else {
              navbar.classList.remove('scrolled');
          }
      });

      // Active link handling
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
          link.addEventListener('click', function() {
              navLinks.forEach(l => l.classList.remove('active'));
              this.classList.add('active');
          });
      });
  });
  