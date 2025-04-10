
const slides = document.querySelectorAll('.slide');
const btns = document.querySelectorAll('.controls button');
let slideIndex = 0;

let intervalId = null;

// initializeSlider();
document.addEventListener('DOMContentLoaded', initializeSlider);


function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add('displaySlide');
        btns[slideIndex].classList.add('active');
        intervalId = setInterval(nextSlide, 6000);
    }
}

function showSlide(index) {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 6000);

    if (index >= slides.length) {
        index = 0;
    } 
    else if (index < 0) {
        index = slides.length - 1;
    }

    slideIndex = index;

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[index].classList.add('displaySlide');

    btns.forEach(btn => {
        btn.classList.remove('active');
    });
    btns[index].classList.add('active');
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}