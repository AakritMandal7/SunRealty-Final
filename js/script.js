const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle menu on hamburger click
toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close menu when any navbar link is clicked
const navLinks = navbar.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
