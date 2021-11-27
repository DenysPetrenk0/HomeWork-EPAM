/** @format */

const refsBtnMovie = {
  btnMovie: document.querySelector("#movie_list"),
  contentContainer: document.querySelector("#movie_content"),
  buttons: document.getElementsByClassName("movie-info__list__btn"),
};

const createArrBtn = (element) => Array.prototype.slice.call(element);

const addCurrentClass = (event) => {
  const buttons = createArrBtn(refsBtnMovie.buttons);
  buttons.forEach((button) => {
    button.classList.remove("movie-info__list__btn__current");
    if (event.target.getAttribute("data-name") === button.textContent) {
      button.classList.add("movie-info__list__btn__current");
    }
  });
};

const addMovieContent = (event) => {
  if (event.target.tagName === "BUTTON") {
    addCurrentClass(event);
    refsBtnMovie.contentContainer.innerHTML = "";
    apiService.getInfoMovie(event.target.textContent);
  }
};

const mediatorBtnMovie = new Mediator(refsBtnMovie.btnMovie, addMovieContent);
mediatorBtnMovie.addListener();
