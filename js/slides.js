/** @format */

const slideContainer = document.querySelector(".testimonials__btn__box");
const slide = document.querySelector(".slides__container");
const leftBtn = document.getElementById("left-btn");
const rigthBtn = document.getElementById("rigth-btn");
const interval = 3000;
const transition = "1.5s";

let slides = document.querySelectorAll(".testimonials__box");
let index = 1;
let slideId;

const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);

firstSlide.setAttribute("id", "first-slide");
lastSlide.setAttribute("id", "last-slide");

slide.append(firstSlide);
slide.prepend(lastSlide);

const slideWidth = slides[index].clientWidth;

const slideTransform = () => `translateX(${-slideWidth * index}px)`;
const getSlide = () => document.querySelectorAll(".testimonials__box");

slide.style.transform = slideTransform();

const startSlide = () => {
  slideId = setInterval(() => {
    moveNextSlide();
  }, interval);
};

slide.addEventListener("transitionend", () => {
  slides = getSlide();

  if (slides[index].id === firstSlide.id) {
    slide.style.transition = "none";
    index = 1;
    slide.style.transform = slideTransform();
  }

  if (slides[index].id === lastSlide.id) {
    slide.style.transition = "none";
    index = slides.length - 2;
    slide.style.transform = slideTransform();
  }
});

const moveNextSlide = () => {
  slides = getSlide();

  if (index >= slides.length - 1) return;
  index++;
  slide.style.transform = slideTransform();
  slide.style.transition = transition;
};

const movePrevSlide = () => {
  slides = getSlide();

  if (index <= 0) return;
  index--;
  slide.style.transform = slideTransform();
  slide.style.transition = transition;
};

slideContainer.addEventListener("mouseenter", () => {
  clearInterval(slideId);
});

slideContainer.addEventListener("mouseleave", startSlide);

leftBtn.addEventListener("click", movePrevSlide);
rigthBtn.addEventListener("click", moveNextSlide);

startSlide();
