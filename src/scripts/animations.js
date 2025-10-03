function setupRevealAnimations() {
  // 1. Mensaje para saber que el script se cargó
  console.log("Animation script loaded!");

  const elementsToAnimate = document.querySelectorAll('.anim-item');

  // 2. Mensaje para saber si encontró los elementos
  console.log(`Found ${elementsToAnimate.length} elements to animate.`);

  if (elementsToAnimate.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 3. Mensaje cuando un elemento se vuelve visible
        console.log("Element is visible:", entry.target);
        
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
}

// Asegúrate de que la función se ejecute solo una vez
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupRevealAnimations);
} else {
  setupRevealAnimations();
}