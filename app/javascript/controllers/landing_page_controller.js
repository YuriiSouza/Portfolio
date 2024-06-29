import { Controller } from "@hotwired/stimulus"
import AOS from "aos";

export default class extends Controller {
  connect() {
		AOS.init();

    this.carouselWrapper = this.element.querySelector('.carousel-wrapper');
    this.carousel = this.element.querySelector('.carousel');
    this.dots = this.element.querySelectorAll('.dot');
    this.currentIndex = 0;
    this.isScrolling = false;

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        console.log(`index ${index} clicado`);
        this.currentIndex = index;
        this.updateCarousel();
      });
    });

    this.carouselWrapper.addEventListener('wheel', (event) => this.handleWheel(event));

    this.updateCarousel();
  }

  updateCarousel() {
    const width = this.carousel.clientWidth;
    this.carousel.style.transform = `translateX(${-this.currentIndex * width}px)`;
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentIndex);
    });
  }

  handleWheel(event) {
    if (!this.isScrolling) {
      this.isScrolling = true;
      if (event.deltaY > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.dots.length;
    } else {
        this.currentIndex = (this.currentIndex - 1 + this.dots.length) % this.dots.length;
      }
      this.updateCarousel();
      setTimeout(() => {
        this.isScrolling = false;
      }, 500);
    }

    // Somente previna a rolagem padrão se estiver rolando horizontalmente no carrossel
    const scrollThreshold = 100; // Defina um limiar de rolagem horizontal
    if (Math.abs(event.deltaX) > scrollThreshold) {
      event.preventDefault();
    }
  }
}

const landingPage = (() => {
		
	}
)
