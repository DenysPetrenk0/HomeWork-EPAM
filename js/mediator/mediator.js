/** @format */

class Mediator {
  constructor(element) {
    this.element = element;
  }

  refs = {
    buttons: document.getElementsByClassName("movie-info__list__btn"),
    contentContainer: document.querySelector("#movie_content"),
    movieList: document.getElementsByClassName("movie-info__list"),
    movieListRight: document.getElementsByClassName("movie-info__list-right"),
  };

  addMovieList(event) {
    const { textContent } = event.target;

    for (let i = this.refs.movieList.length - 1; i >= 0; --i) {
      this.refs.movieList[i].remove();
      this.refs.movieListRight[i].remove();
    }
    apiService.getInfo({
      query: textContent,
      firstCallBack: murkupBtnMovie,
      value: "person",
    });
  }

  addMovieContent(event) {
    const { textContent } = event.target;

    this.addCurrentClass(event);
    this.refs.contentContainer.innerHTML = "";
    apiService.getInfo({
      query: textContent,
      firstCallBack: murkupContentSection,
      value: "movie",
    });
  }

  createArrBtn(element) {
    return Array.prototype.slice.call(element);
  }

  addCurrentClass(event) {
    const buttons = this.createArrBtn(this.refs.buttons);
    buttons.forEach((button) => {
      button.classList.remove("movie-info__list__btn__current");
      if (event.target.getAttribute("data-name") === button.textContent) {
        button.classList.add("movie-info__list__btn__current");
      }
    });
  }

  chackCallback = (event) => {
    const { tagName } = event.target;
    if (tagName === "BUTTON" && event.target.hasAttribute("data-name")) {
      this.addMovieContent(event);
    } else if (tagName === "BUTTON") {
      this.addMovieList(event);
    }
  };

  addListener() {
    this.element.addEventListener("click", this.chackCallback);
  }
}
