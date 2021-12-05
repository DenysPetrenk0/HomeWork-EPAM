/** @format */

const refsBtnMovie = {
  btnMovie: document.querySelector("#movie_list"),
};

const mediatorBtnMovie = new Mediator(refsBtnMovie.btnMovie);
mediatorBtnMovie.addListener();
