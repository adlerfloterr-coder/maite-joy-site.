let slider = document.querySelector('.slider img');
let imagens = ['images/banner.jpg'];
let index = 0;
setInterval(() => {
    index = (index + 1) % imagens.length;
    slider.src = imagens[index];
}, 4000);
