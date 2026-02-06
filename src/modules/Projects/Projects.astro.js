function initProjectsCarousel() {
  const container = document.querySelector('.projects-carousel-container')
  const cards = [...document.querySelectorAll('.project-card')]
  const prevBtn = document.querySelector('.carousel-btn-prev')
  const nextBtn = document.querySelector('.carousel-btn-next')
  const dots = [...document.querySelectorAll('.carousel-dot')]
  
  if (cards.length === 0 || !container) return
  
  let currentIndex = 0
  let touchStartX = 0
  let touchEndX = 0
  let mouseStartX = 0
  let isMouseDragging = false
  let navigatedByDrag = false
  const minSwipe = 50
  
  function showCard(index) {
    if (index < 0) index = cards.length - 1
    if (index >= cards.length) index = 0
    currentIndex = index
    
    cards.forEach((card, i) => {
      card.classList.remove('active', 'prev')
      if (i === currentIndex) {
        card.classList.add('active')
      } else if (i < currentIndex) {
        card.classList.add('prev')
      }
    })
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex)
    })
  }
  
  // Navegación con botones
  if (prevBtn) {
    prevBtn.addEventListener('click', () => showCard(currentIndex - 1))
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => showCard(currentIndex + 1))
  }
  
  // Navegación con dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showCard(i))
  })
  
  // Navegación con teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') showCard(currentIndex - 1)
    else if (e.key === 'ArrowRight') showCard(currentIndex + 1)
  })
  
  // Swipe táctil
  container.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX
  }, { passive: true })
  
  container.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX
    const diff = touchStartX - touchEndX
    if (diff > minSwipe) showCard(currentIndex + 1)
    else if (diff < -minSwipe) showCard(currentIndex - 1)
  }, { passive: true })
  
  // Arrastrar con el mouse (click + drag)
  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return // solo botón izquierdo
    mouseStartX = e.clientX
    isMouseDragging = true
  })
  
  document.addEventListener('mouseup', (e) => {
    if (!isMouseDragging) return
    const diff = mouseStartX - e.clientX
    if (diff > minSwipe) {
      showCard(currentIndex + 1)
      navigatedByDrag = true
    } else if (diff < -minSwipe) {
      showCard(currentIndex - 1)
      navigatedByDrag = true
    }
    isMouseDragging = false
  })
  
  // Evitar que un arrastre dispare un click en enlaces/botones
  container.addEventListener('click', (e) => {
    if (navigatedByDrag) {
      e.preventDefault()
      e.stopPropagation()
      navigatedByDrag = false
    }
  }, true)
  
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
