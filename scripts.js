// Get menu toggle button and mobile menu elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility with slide-down animation
menuToggle.addEventListener('click', () => {
  if (mobileMenu.classList.contains('hidden')) {
    // Show the menu and add animation class
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('slide-down');
  } else {
    // Hide the menu and remove animation class
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('slide-down');
  }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true      // Run animation only once when scrolled into view
});

