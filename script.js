<<<<<<< HEAD
// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
        document.getElementById('nav-links').classList.remove('active'); // close menu on mobile
    });
});

// Hamburger Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});

=======
styles.css = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thanks! This mockup form does not send messages yet.';
  contactForm.reset();
});
>>>>>>> 803e0eafbd1ccc9bba3fa650a7ad76cd1a06cbe7
