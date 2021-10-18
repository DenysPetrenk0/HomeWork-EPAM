/** @format */

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

  const {
    slide,
    slides,
    slideContainer,
    leftBtn,
    rigthBtn,
    interval,
    transition,
    nameClass,
    adjustment,
  } = this.obj;

  this.firstSlide = slides[0].cloneNode(true);
  this.lastSlide = slides[slides.length - 1].cloneNode(true);

  this.firstSlide.setAttribute("id", "first-slide");
  this.lastSlide.setAttribute("id", "last-slide");

  slide.append(this.firstSlide);
  slide.prepend(this.lastSlide);

  this.slideWidth = slides[index].clientWidth + adjustment;

  this.slideTransform = function () {
    return `translateX(${-this.slideWidth * index}px)`;
  };

  this.getSlide = function () {
    return document.querySelectorAll(nameClass);
  };

  slide.style.transform = this.slideTransform();

  slide.addEventListener("transitionend", () => {
    let slides = this.getSlide();
    if (slides[index].id === this.firstSlide.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = this.slideTransform();
    }

    if (slides[index].id === this.lastSlide.id) {
      slide.style.transition = "none";
      index = slides.length - 2;
      slide.style.transform = this.slideTransform();
    }
  });

  this.startSlide = function () {
    slideId = setInterval(() => {
      this.moveNextSlide();
    }, interval);
  };

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

  slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
  });

  slideContainer.addEventListener("mouseleave", this.startSlide.bind(this));

  leftBtn.addEventListener("click", this.movePrevSlide.bind(this));
  rigthBtn.addEventListener("click", this.moveNextSlide.bind(this));
}

function TestimonialsSectionSlider(obj) {
  this.obj = obj;
  const { slide } = this.obj;
  Slider.call(this);

  const keyControl = (event) => {
    if (event.code === "ArrowRight") {
      this.moveNextSlide();
    }

    if (event.code === "ArrowLeft") {
      this.movePrevSlide();
    }
  };

  const mouseScrollControl = (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      this.moveNextSlide();
    }

    if (event.deltaY < 0) {
      this.movePrevSlide();
    }
  };

  slide.addEventListener("wheel", mouseScrollControl);
  document.addEventListener("keyup", keyControl);
}

function PortfolioSectionSlider(obj) {
  this.obj = obj;
  const { slideContainer } = this.obj;
  Slider.call(this);

  let startX = 0;
  let finishX = 0;
  let result = 0;

  const mousePressDown = (event) => {
    event.preventDefault();
    startX = event.clientX;
  };

  const mousePressUp = (event) => {
    finishX = event.clientX;
    result = startX - finishX;
    if (result < 0 && result * -1 > 50) {
      this.movePrevSlide();
    }
    if (result > 0 && result > 50) {
      this.moveNextSlide();
    }
  };

  slideContainer.addEventListener("mousedown", mousePressDown);
  slideContainer.addEventListener("mouseup", mousePressUp);
}

const testimonialsSlide = new TestimonialsSectionSlider(refsTestimonials);
const portfolioSlide = new PortfolioSectionSlider(refsPortfolio);

testimonialsSlide.startSlide();
portfolioSlide.startSlide();
