styles.css = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formStatus.textContent = 'Thanks! This mockup form does not send messages yet.';
  contactForm.reset();
});