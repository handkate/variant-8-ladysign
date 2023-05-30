// let newSwiper;
// const swiper = newSwiper('.swiper-container', {
//     slidesPerView: 1,
//     loop: true,
//     // пагинация
//     pagination: 
//     {
//         el: '.swiper-pagination',
//         clickabel:true,
//     },
//     // навигация
//     navigation: 
//     {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });
// {
//     "devDependencies": {
//       "serve": "^11.2.0"
//     },
//     "main": "index.html",
//     "name": "swiper-navigation",
//     "scripts": {
//       "build": "echo This is a static template, there is no bundler or bundling involved!",
//       "start": "serve"
//     },
//     "tags": [
//       "swiper"
//     ]
// }
const images = document.querySelectorAll('.itcss__item .itcss__item');
const sliderline = document.querySelector('.itcss__item');
let count = 0;
let width;

function init() {
    console.log('resize')
    width = document.querySelector('.itcss__item').offsetWidth;
    sliderline.style.width = width +'px';
    images.forEach(item => {
        item.style.width = width +'px';
        item.style.height = 'auto';

    });
    
}

window.addEventListener('resize', init);
init();