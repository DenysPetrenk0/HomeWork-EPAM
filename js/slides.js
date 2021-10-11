/** @format */

// let index = 1;
// let slideId;

const refsTestimonials = {
  slideContainer: document.querySelector(".testimonials__btn__box"),
  slide: document.querySelector(".slides__container"),
  slides: document.querySelectorAll(".testimonials__box"),
  leftBtn: document.getElementById("testimonials-left-btn"),
  rigthBtn: document.getElementById("testimonials-rigth-btn"),
  interval: 2000,
  transition: "1.5s",
  nameClass: ".testimonials__box",
};

const refsPortfolio = {
  slideContainer: document.querySelector("#portfolio"),
  slide: document.querySelector(".portfolio__list"),
  slides: document.querySelectorAll(".portfolio__item"),
  leftBtn: document.getElementById("portfolio-left-btn"),
  rigthBtn: document.getElementById("portfolio-right-btn"),
  interval: 2000,
  transition: "2.0s",
  nameClass: ".portfolio__item",
};

const Slide = function ({
  slide,
  slides,
  slideContainer,
  leftBtn,
  rigthBtn,
  interval,
  transition,
  nameClass,
}) {
  let index = 1;
  let slideId;

  this.firstSlide = slides[0].cloneNode(true);
  this.lastSlide = slides[slides.length - 1].cloneNode(true);

  this.firstSlide.setAttribute("id", "first-slide");
  this.lastSlide.setAttribute("id", "last-slide");

  slide.append(this.firstSlide);
  slide.prepend(this.lastSlide);

  this.slideWidth = slides[index].clientWidth + 40; // 40

  this.slideTransform = function () {
    return `translateX(${-this.slideWidth * index}px)`;
  };
  this.getSlide = function () {
    return document.querySelectorAll(nameClass);
  };

  slide.style.transform = this.slideTransform();

  this.startSlide = function () {
    slideId = setInterval(() => {
      this.moveNextSlide();
    }, interval);
  };

  slide.addEventListener("transitionend", () => {
    let slides = this.getSlide();
    if (slides[index].id === this.firstSlide.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = this.slideTransform();
    }

    if (slides[index].id === this.lastSlide.id) {
      slide.style.transition = "none";
      index = slides.length - 2; //2
      slide.style.transform = this.slideTransform();
    }
  });

  this.moveNextSlide = function () {
    let slides = this.getSlide();

    if (index >= slides.length - 1) return;
    index++;
    slide.style.transform = this.slideTransform();
    slide.style.transition = transition;
  };

  this.movePrevSlide = function () {
    if (index <= 0) return;
    index--;
    slide.style.transform = this.slideTransform();
    slide.style.transition = transition;
  };

  // slideContainer.addEventListener("mouseenter", () => {
  //   clearInterval(slideId);
  // });

  // slideContainer.addEventListener("mouseleave", this.startSlide.bind(this));

  leftBtn.addEventListener("click", this.movePrevSlide.bind(this));
  rigthBtn.addEventListener("click", this.moveNextSlide.bind(this));
};

const testimonialsSlide = new Slide(refsTestimonials);
const portfolioSlide = new Slide(refsPortfolio);

// testimonialsSlide.startSlide();
// portfolioSlide.startSlide();
