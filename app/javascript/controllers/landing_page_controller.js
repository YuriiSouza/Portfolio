import { Controller } from "@hotwired/stimulus"
import AOS from "aos";
import Particles from "particlesjs";

export default class extends Controller {
	connect() {
		AOS.init();
		Particles.init({
			selector: '#bg_skills'
		});
		
		this.carouselWrapper = this.element.querySelector('.carousel-wrapper');
		this.carousel = this.element.querySelector('.carousel');
		this.dots = this.element.querySelectorAll('.dot');
		this.currentIndex = 0;
		this.isScrolling = false;
		this.code = this.element.querySelector('#typewriter');

		this.dots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				this.currentIndex = index;
				this.updateCarousel();
			});
		});

		this.carouselWrapper.addEventListener('wheel', (event) => this.handleWheel(event));

		this.updateCarousel();
		this.setupTypewriter(this.code);
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
	}

	setupTypewriter(t) {
		var html = t.innerHTML;

		t.innerHTML = "";

		var cursorPosition = 0;
		var	tag = "";
		var	writingTag = false;
		var	tagOpen = false;
		var	typeSpeed = 10;
		var	tempTypeSpeed = 0;


		if (writingTag) {
			tag += html[cursorPosition];
		}

		if (html[cursorPosition] === "<") {
			tempTypeSpeed = 0;
			if (tagOpen) {
				tagOpen = false;
				writingTag = true;
			} else {
				tag = "";
				tagOpen = true;
				writingTag = true;
				tag += html[cursorPosition];
			}
		}
		if (!writingTag && tagOpen) {
			tag.innerHTML += html[cursorPosition];
		}
		if (!writingTag && !tagOpen) {
			if (html[cursorPosition] === " ") {
				tempTypeSpeed = 0;
			} else {
				tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			}
			t.innerHTML += html[cursorPosition];
		}
		if (writingTag && html[cursorPosition] === ">") {
			tempTypeSpeed = (Math.random() * typeSpeed) + 50;
			writingTag = false;
			if (tagOpen) {
				var newSpan = document.createElement("span");
				t.appendChild(newSpan);
				newSpan.innerHTML = tag;
				tag = newSpan.firstChild;
			}
		}

		cursorPosition += 1;
		if (cursorPosition < html.length - 1) {
			setTimeout(type, tempTypeSpeed);
		}
	}
}
