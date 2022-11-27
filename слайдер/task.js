const prev = document.querySelector('div.slider__arrow_prev')
const next = document.querySelector('div.slider__arrow_next')
const items = document.querySelectorAll('.slider__item');

let currentSlide = 0;
let lastSlide;

prev.onclick = function () {

    lastSlide = currentSlide;
    currentSlide -= 1;
    if (currentSlide < 0 && currentSlide != 0) {
        currentSlide = items.length - 1;
    }
    slide(currentSlide);
}

next.onclick = function () {

    lastSlide = currentSlide;
    currentSlide += 1;
    if(currentSlide >= items.length){
        currentSlide = 0;
    }
    slide(currentSlide);


}

function slide() {
    items[lastSlide].classList.remove('slider__item_active');
    items[currentSlide].classList.add('slider__item_active');
}

