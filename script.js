// Smooth scroll (optional, CSS scroll-behavior already works)
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submit alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! I will contact you soon 😊');
    form.reset();
});
