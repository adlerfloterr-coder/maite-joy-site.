let banner = document.querySelector('.banner img');
let imagens = ['images/banner.jpg'];
let index = 0;
setInterval(() => {
    index = (index + 1) % imagens.length;
    banner.src = imagens[index];
}, 4000);
