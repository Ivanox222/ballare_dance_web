document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const slidesContainer = document.querySelector('.hero-slides');
  const slides = document.querySelectorAll('.hero-slide');
  const total = slides.length;

  // Función para mostrar el slide actual
  function showSlide(index) {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  // Cambiar slide automáticamente cada 3 segundos
  let interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    showSlide(currentIndex);
  }, 3000);

  // Botones de navegación
  const prevBtn = document.querySelector('.hero-prev');
  const nextBtn = document.querySelector('.hero-next');

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

  // Reinicia el intervalo al hacer clic
  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % total;
      showSlide(currentIndex);
    }, 3000);
  }
});