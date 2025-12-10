let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slideimg');
const totalSlides = slides.length;


function showSlide(index) {
const slideWidth = slides[0].clientWidth;
document.querySelector('.hero-slidesimg').style.transform = `translateX(${-index * slideWidth}px)`;
}


document.querySelector('.next').addEventListener('click', () => {
currentIndex = (currentIndex + 1) % totalSlides;
showSlide(currentIndex);
});


document.querySelector('.prev').addEventListener('click', () => {
currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
showSlide(currentIndex);
});


window.addEventListener('resize', () => showSlide(currentIndex));