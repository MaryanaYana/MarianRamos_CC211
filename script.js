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

