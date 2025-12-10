document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;

  const slidesContainer = document.querySelector('.hero-slidesimg');
  const slides = document.querySelectorAll('.hero-slideimg');
  const total = slides.length;

  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  let interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    showSlide(currentIndex);
  }, 3000);

  const prevBtn = document.querySelector('.hero-previmg');
  const nextBtn = document.querySelector('.hero-nextimg');

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + total) % total;
    showSlide(currentIndex);
    resetInterval();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % total;
    showSlide(currentIndex);
    resetInterval();
  });

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % total;
      showSlide(currentIndex);
    }, 3000);
  }
});