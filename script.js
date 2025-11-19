let slider = document.querySelector('.slider img');
let imagens = ['images/banner.jpg'];
let index = 0;
setInterval(() => {
    index = (index + 1) % imagens.length;
    slider.src = imagens[index];
}, 4000);

// Fade-in ao rolar
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => { appearOnScroll.observe(fader); });
