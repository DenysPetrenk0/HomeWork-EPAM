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
  const { tagName, textContent } = event.target;
  if (tagName === "BUTTON") {
    addCurrentClass(event);
    refsBtnMovie.contentContainer.innerHTML = "";
    apiService.getInfo({
      query: textContent,
      callBack: murkupContentSection,
      value: "movie",
    });
  }
};

const mediatorBtnMovie = new Mediator(refsBtnMovie.btnMovie, addMovieContent);
mediatorBtnMovie.addListener();
