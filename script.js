const sliderList = document.querySelector('.list');
const projects = Array.from(document.querySelectorAll('.project-slider'));
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;
const slideWidth = sliderList.offsetWidth / 3;
const maxIndex = Math.ceil(projects.length / 2) - 1;


function updateSlider() {
    sliderList.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
function handlePrevClick() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
}
function handleNextClick() {
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    updateSlider();
}
prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);