/** @format */

const refsBtnAuthor = {
  btnAuthor: document.querySelector(".content__horizontal-btn"),
  btnAuthorRight: document.querySelector(".content__vertical-btn"),
  movieList: document.getElementsByClassName("movie-info__list"),
  movieListRight: document.getElementsByClassName("movie-info__list-right"),
};

const addMovieList = (event) => {
  const { textContent, tagName } = event.target;
  if (tagName === "BUTTON") {
    for (let i = refsBtnAuthor.movieList.length - 1; i >= 0; --i) {
      refsBtnAuthor.movieList[i].remove();
      refsBtnAuthor.movieListRight[i].remove();
    }
    apiService.getInfo({
      query: textContent,
      callBack: murkupBtnMovie,
      value: "person",
    });
  }
};

const checkButtons = (event) => {
  const { className } = event.target;
  if (className === "movie-info__list__btn") {
    addMovieContent(event);
  } else {
    addMovieList(event);
  }
};

const mediatorBtnAuthor = new Mediator(refsBtnAuthor.btnAuthor, addMovieList);
const mediatorBtnAuthorRight = new Mediator(
  refsBtnAuthor.btnAuthorRight,
  checkButtons
);
mediatorBtnAuthor.addListener();
mediatorBtnAuthorRight.addListener();
