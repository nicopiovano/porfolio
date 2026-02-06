function initProjectsCarousel() {
  const cards = [...document.querySelectorAll('.project-card')]
  const prevBtn = document.querySelector('.carousel-btn-prev')
  const nextBtn = document.querySelector('.carousel-btn-next')
  const dots = [...document.querySelectorAll('.carousel-dot')]
  
  if (cards.length === 0) return
  
  let currentIndex = 0
  
  function showCard(index) {
    // Validar índice
    if (index < 0) index = cards.length - 1
    if (index >= cards.length) index = 0
    
    currentIndex = index
    
    // Actualizar cards
    cards.forEach((card, i) => {
      card.classList.remove('active', 'prev')
      if (i === currentIndex) {
        card.classList.add('active')
      } else if (i < currentIndex) {
        card.classList.add('prev')
      }
    })
    
    // Actualizar dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex)
    })
  }
  
  // Navegación con botones
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showCard(currentIndex - 1)
    })
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showCard(currentIndex + 1)
    })
  }
  
  // Navegación con dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showCard(i)
    })
  })
  
  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      showCard(currentIndex - 1)
    } else if (e.key === 'ArrowRight') {
      showCard(currentIndex + 1)
    }
  })
  
  // Inicializar con la primera card
  showCard(0)
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProjectsCarousel)
} else {
  initProjectsCarousel()
}

// Reinicializar en transiciones de Astro
document.addEventListener('astro:page-load', initProjectsCarousel)
