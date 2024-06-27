document.addEventListener('DOMContentLoaded', () => {
  const carouselWrapper = document.querySelector('.carousel-wrapper');
  const carousel = document.querySelector('.carousel');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;

  function updateCarousel() {
    const width = carousel.clientWidth;
    carousel.style.transform = `translateX(${-currentIndex * width}px)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      console.log(`index ${index} clicado`);
      currentIndex = index;
      updateCarousel();
    });
  });

  let isScrolling = false;
  carouselWrapper.addEventListener('wheel', (event) => {
    if (!isScrolling) {
      isScrolling = true;
      if (event.deltaY > 0) {
        currentIndex = (currentIndex + 1) % dots.length;
      } else {
        currentIndex = (currentIndex - 1 + dots.length) % dots.length;
      }
      updateCarousel();
      setTimeout(() => {
        isScrolling = false;
      }, 500);
    }
    // Somente previna a rolagem padrão se estiver rolando horizontalmente no carrossel
    const scrollThreshold = 100; // Defina um limiar de rolagem horizontal
    if (Math.abs(event.deltaX) > scrollThreshold) {
      event.preventDefault();
    }
  });

  updateCarousel();
});

