let currentIndex = 0;
const items = document.querySelectorAll('.carousel_item');
const totalItems = items.length;
const visibleItems = 3;
function updateCarousel() {
    items.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + visibleItems) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}
function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
function moveRight() {
    if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
        updateCarousel();
    }
}
updateCarousel();

let currentSlide = 0;
const slides = document.querySelectorAll('.bottom_carousel_item');
const totalSlides = slides.length;
function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.remove('hidden');
        } else {
            slide.classList.add('hidden');
        }
    });
}
function slidePrev() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; 
    }
    updateSlide();
}
function slideNext() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; 
    }
    updateSlide();
}
updateSlide();
document.addEventListener('DOMContentLoaded', () => {
    const find2 = document.querySelector('.find2');
    const findWhiteButton = document.querySelector('.find_white_button');

    if (findWhiteButton && find2) {
        findWhiteButton.addEventListener('click', () => {
            find2.style.display = 'flex';
            console.log('Кнопка нажата, .find2 должен быть виден');
        });
    } else {
        console.error('Элемент .find2 или .find_white_button не найден');
    }
});
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');
let p7 = document.querySelector('.p7');
let p8 = document.querySelector('.p8');
let hidden2 = document.querySelector('.hidden2');
let active = document.querySelector('.active');
let onModeration = document.querySelector('.on_moderation');
let finded = document.querySelector('.found');
let archive = document.querySelector('.archive');
onModeration.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'block';
    p4.style.display = 'block';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';
    p8.style.display = 'none';
})
active.addEventListener('click', function () {
    p1.style.display = 'block';
    p2.style.display = 'block';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'none';
    p8.style.display = 'none';
})
finded.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'block';
    p6.style.display = 'block';
    p7.style.display = 'none';
    p8.style.display = 'none';
})
archive.addEventListener('click', function () {
    p1.style.display = 'none';
    p2.style.display = 'none';
    p3.style.display = 'none';
    p4.style.display = 'none';
    p5.style.display = 'none';
    p6.style.display = 'none';
    p7.style.display = 'block';
    p8.style.display = 'block';
})

