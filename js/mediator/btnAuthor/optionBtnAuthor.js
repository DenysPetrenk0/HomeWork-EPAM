/** @format */

const refsBtnAuthor = {
  btnAuthor: document.querySelector(".content__horizontal-btn"),
  btnAuthorRight: document.querySelector(".content__vertical-btn"),
};

const checkButtons = (event) => {
  const { className } = event.target;
  if (className === "movie-info__list__btn") {
    addMovieContent(event);
  } else {
    addMovieList(event);
  }
};

const mediatorBtnAuthor = new Mediator(refsBtnAuthor.btnAuthor);
const mediatorBtnAuthorRight = new Mediator(refsBtnAuthor.btnAuthorRight);
mediatorBtnAuthor.addListener();
mediatorBtnAuthorRight.addListener();
