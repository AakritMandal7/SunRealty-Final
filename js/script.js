const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle the mobile menu
toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close the menu when a link is clicked (only for mobile view)
const navLinks = navbar.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
});
