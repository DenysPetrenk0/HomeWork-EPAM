/** @format */

const refsSortAuthor = {
  btnAuthor: document.querySelector(".content__horizontal-btn"),
  btnAuthorRight: document.querySelector(".content__vertical-btn"),
  btnMovie: document.querySelector("#movie_list"),
  contentContainer: document.querySelector("#movie_content"),
  movieList: document.getElementsByClassName("movie-info__list"),
  movieListRight: document.getElementsByClassName("movie-info__list-right"),
  buttons: document.getElementsByClassName("movie-info__list__btn"),
};

const addMovieList = (event) => {
  const { textContent, tagName } = event.target;
  if (tagName === "BUTTON") {
    for (let i = refsSortAuthor.movieList.length - 1; i >= 0; --i) {
      refsSortAuthor.movieList[i].remove();
      refsSortAuthor.movieListRight[i].remove();
    }
    getListAuthor(textContent);
  }
};

const addCurrentClass = (event) => {
  const buttons = Array.prototype.slice.call(refsSortAuthor.buttons);
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
    refsSortAuthor.contentContainer.innerHTML = "";
    getInfoMovie(event.target.textContent);
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

refsSortAuthor.btnAuthor.addEventListener("click", addMovieList);
refsSortAuthor.btnMovie.addEventListener("click", addMovieContent);
refsSortAuthor.btnAuthorRight.addEventListener("click", checkButtons);
