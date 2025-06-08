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
        });
    }
});
const elements = [
    document.querySelector('.p1'),
    document.querySelector('.p2'),
    document.querySelector('.p3'),
    document.querySelector('.p4'),
    document.querySelector('.p5'),
    document.querySelector('.p6'),
    document.querySelector('.p7'),
    document.querySelector('.p8')
];

function showElements(visibleIndices) {
    elements.forEach((el, index) => {
        if (el) {
            el.classList.toggle('visible', visibleIndices.includes(index));
            el.classList.toggle('hidden', !visibleIndices.includes(index));
        } 
    });
}

document.addEventListener('click', (event) => {
    try {
        if (event.target.matches('.on_moderation')) {
            showElements([2, 3]);
        } else if (event.target.matches('.active')) {
            showElements([0, 1]); 
        } else if (event.target.matches('.found')) {
            showElements([4, 5]); 
        } else if (event.target.matches('.archive')) {
            showElements([6, 7]); 
        }
    } catch (error) {
    }
});
document.querySelectorAll('.f2btn').forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
document.addEventListener('click', (event) => {
    if (event.target.matches('.green_with_border')) {
        try {
            event.target.classList.toggle('toggled');
        } catch (error) {
        }
    }
});
document.addEventListener('click', (event) => {
    if (event.target.closest('.cont_btn')) {
        try {
            event.target.closest('.cont_btn').classList.toggle('toggled');
        } catch (error) {
        }
    }
});
document.addEventListener('click', (event) => {
    if (event.target.closest('.change_btn')) {
        try {
            event.target.closest('.change_btn').classList.toggle('toggled');
        } catch (error) {
        }
    }
});
document.addEventListener('click', (event) => {
    if (event.target.closest('.grey_nav')) {
        try {
            document.querySelectorAll('.grey_nav').forEach(btn => {
                btn.classList.remove('toggled');
            });
            event.target.closest('.grey_nav').classList.add('toggled');
        } catch (error) {
        }
    }
});
document.addEventListener('click', (event) => {
    if (event.target.closest('.save_button')) {
        try {
            event.target.closest('.save_button').classList.toggle('toggled');
        } catch (error) {
            console.error('Ошибка при переключении цвета кнопки:', error);
        }
    }
});
document.addEventListener('click', (event) => {
    if (event.target.closest('.filter_button')) {
        try {
            event.target.closest('.filter_button').classList.toggle('toggled');
        } catch (error) {
            console.error('Ошибка при переключении цвета кнопки:', error);
        }
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
