
/* Animação de Aparecimento na Rolagem (Scroll) */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.timeline-container').forEach((el) => {
  // Estado inicial (invisível e levemente deslocado para baixo)
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s ease-out';
  
  observer.observe(el);
});