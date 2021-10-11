/** @format */

const interval = 3000;
const transition = "1.5s";
let index = 1;
let slideId;

const refs = {
  slideContainer: document.querySelector(".testimonials__btn__box"),
  slide: document.querySelector(".slides__container"),
  slides: document.querySelectorAll(".testimonials__box"),
  leftBtn: document.getElementById("left-btn"),
  rigthBtn: document.getElementById("rigth-btn"),
  // testimonialsSlides: document.querySelectorAll(".testimonials__box"),
};

const Slide = function (slide, slides, interval) {
  let index = 1;
  let slideId;

  this.firstSlide = slides[0].cloneNode(true);
  this.lastSlide = slides[slides.length - 1].cloneNode(true);

  this.firstSlide.setAttribute("id", "first-slide");
  this.lastSlide.setAttribute("id", "last-slide");

  slide.append(this.firstSlide);
  slide.prepend(this.lastSlide);

  this.slideWidth = slides[index].clientWidth;

  this.slideTransform = function () {
    return `translateX(${-this.slideWidth * index}px)`;
  };
  this.getSlide = function () {
    return document.querySelectorAll(".testimonials__box");
  };
  slide.style.transform = this.slideTransform();

  this.moveNextSlide = function () {
    let slides = this.getSlide();

    if (index >= slides.length - 1) return;
    index++;
    slide.style.transform = this.slideTransform();
    slide.style.transition = transition;
  };

  this.startSlide = function () {
    slideId = setInterval(() => {
      this.moveNextSlide();
    }, interval);
  };
};

// const firstSlide = refs.slides[0].cloneNode(true);
// const lastSlide = refs.slides[refs.slides.length - 1].cloneNode(true);

// firstSlide.setAttribute("id", "first-slide");
// lastSlide.setAttribute("id", "last-slide");

// refs.slide.append(firstSlide);
// refs.slide.prepend(lastSlide);

// const slideWidth = refs.slides[index].clientWidth;
// const slideTransform = () => `translateX(${-slideWidth * index}px)`;
// const getSlide = () => document.querySelectorAll(".testimonials__box");

// refs.slide.style.transform = slideTransform();

// const startSlide = () => {
//   slideId = setInterval(() => {
//     moveNextSlide();
//   }, interval);
// };

refs.slide.addEventListener("transitionend", () => {
  refs.slides = getSlide();

  if (refs.slides[index].id === firstSlide.id) {
    refs.slide.style.transition = "none";
    index = 1;
    refs.slide.style.transform = slideTransform();
  }

  if (refs.slides[index].id === lastSlide.id) {
    refs.slide.style.transition = "none";
    index = refs.slides.length - 2;
    refs.slide.style.transform = slideTransform();
  }
});

// const moveNextSlide = () => {
//   refs.slides = getSlide();

//   if (index >= refs.slides.length - 1) return;
//   index++;
//   refs.slide.style.transform = slideTransform();
//   refs.slide.style.transition = transition;
// };

// const movePrevSlide = () => {
//   refs.slides = getSlide();

//   if (index <= 0) return;
//   index--;
//   refs.slide.style.transform = slideTransform();
//   refs.slide.style.transition = transition;
// };

// refs.slideContainer.addEventListener("mouseenter", () => {
//   clearInterval(slideId);
// });

// refs.slideContainer.addEventListener("mouseleave", startSlide);

// refs.leftBtn.addEventListener("click", movePrevSlide);
// refs.rigthBtn.addEventListener("click", moveNextSlide);

// startSlide();

console.dir(Slide);

const testimonialsSlide = new Slide(refs.slide, refs.slides, interval);

console.dir(testimonialsSlide);
// testimonialsSlide.startSlide();
