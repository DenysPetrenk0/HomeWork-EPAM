/** @format */

// let index = 1;

const refsTestimonials = {
  slideContainer: document.querySelector(".testimonials__btn__box"),
  slide: document.querySelector(".slides__container"),
  slides: document.querySelectorAll(".testimonials__box"),
  leftBtn: document.getElementById("testimonials-left-btn"),
  rigthBtn: document.getElementById("testimonials-rigth-btn"),
  interval: 3000,
  transition: "1.5s",
  nameClass: ".testimonials__box",
  adjustment: 0,
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
  adjustment: 40,
};

function Slider() {
  let index = 1;
  let slideId;

  this.firstSlide = this.slides[0].cloneNode(true);
  this.lastSlide = this.slides[this.slides.length - 1].cloneNode(true);

  this.firstSlide.setAttribute("id", "first-slide");
  this.lastSlide.setAttribute("id", "last-slide");

  this.slide.append(this.firstSlide);
  this.slide.prepend(this.lastSlide);

  this.slideWidth = this.slides[index].clientWidth + this.adjustment;

  this.slideTransform = function () {
    return `translateX(${-this.slideWidth * index}px)`;
  };

  this.getSlide = function () {
    return document.querySelectorAll(this.nameClass);
  };

  this.slide.style.transform = this.slideTransform();

  this.slide.addEventListener("transitionend", () => {
    let slides = this.getSlide();
    if (slides[index].id === this.firstSlide.id) {
      this.slide.style.transition = "none";
      index = 1;
      this.slide.style.transform = this.slideTransform();
    }

    if (slides[index].id === this.lastSlide.id) {
      this.slide.style.transition = "none";
      index = slides.length - 2;
      this.slide.style.transform = this.slideTransform();
    }
  });

  this.startSlide = function () {
    slideId = setInterval(() => {
      this.moveNextSlide();
    }, this.interval);
  };

  this.moveNextSlide = function () {
    let slides = this.getSlide();

    if (index >= slides.length - 1) return;
    index++;
    this.slide.style.transform = this.slideTransform();
    this.slide.style.transition = this.transition;
  };

  this.movePrevSlide = function () {
    if (index <= 0) return;
    index--;
    this.slide.style.transform = this.slideTransform();
    this.slide.style.transition = this.transition;
  };

  this.slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
  });

  this.slideContainer.addEventListener(
    "mouseleave",
    this.startSlide.bind(this)
  );

  this.leftBtn.addEventListener("click", this.movePrevSlide.bind(this));
  this.rigthBtn.addEventListener("click", this.moveNextSlide.bind(this));
}

function FirstSliderInstance({
  slide,
  slides,
  slideContainer,
  leftBtn,
  rigthBtn,
  interval,
  transition,
  nameClass,
  adjustment,
}) {
  this.slide = slide;
  this.slides = slides;
  this.slideContainer = slideContainer;
  this.leftBtn = leftBtn;
  this.rigthBtn = rigthBtn;
  this.interval = interval;
  this.transition = transition;
  this.nameClass = nameClass;
  this.adjustment = adjustment;

  Slider.call(this);

  this.slide.addEventListener("mousemove", (event) => {
    pos = event.clientX - event.offsetX;
    pos > 300 ? this.movePrevSlide() : this.moveNextSlide();
  });
}

function SecondSliderInstance({
  slide,
  slides,
  slideContainer,
  leftBtn,
  rigthBtn,
  interval,
  transition,
  nameClass,
  adjustment,
}) {
  this.slide = slide;
  this.slides = slides;
  this.slideContainer = slideContainer;
  this.leftBtn = leftBtn;
  this.rigthBtn = rigthBtn;
  this.interval = interval;
  this.transition = transition;
  this.nameClass = nameClass;
  this.adjustment = adjustment;

  Slider.call(this);
}

const testimonialsSlide = new FirstSliderInstance(refsTestimonials);
const portfolioSlide = new SecondSliderInstance(refsPortfolio);

// testimonialsSlide.startSlide();
// portfolioSlide.startSlide();

// console.dir(Slider);
// console.dir(testimonialsSlide);
// console.dir(portfolioSlide);
