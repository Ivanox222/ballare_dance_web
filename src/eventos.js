// Client script for the Eventos page
// Adds simple click handlers for the "Ver Detalles" buttons.
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn-event');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = e.target.closest('.event-card');
      const title = card ? card.querySelector('.event-name')?.textContent : 'Evento';
      alert(`Ver detalles de: ${title}`);
    });
  });
});
