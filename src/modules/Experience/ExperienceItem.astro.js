const timeline = document.getElementById('timeline')
const line = timeline?.querySelector('.timeline-line')

function updateLineWidth() {
    if (!timeline || !line) return
    line.style.width = timeline.scrollWidth + 'px'
}

updateLineWidth()
window.addEventListener('resize', updateLineWidth)

// Cuando el timeline estaba oculto (modo unset), el width puede quedar en 0.
// Recalcular cuando se elige el modo o cuando termina el intro loader.
function updateAfterLayout() {
  requestAnimationFrame(() => updateLineWidth())
}

window.addEventListener('site-mode:changed', updateAfterLayout)
window.addEventListener('intro-loader:done', updateAfterLayout)