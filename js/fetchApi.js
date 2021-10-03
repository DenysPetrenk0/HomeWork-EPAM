/** @format */

const API_KEY = "1f012808e02fe47b316d5e12ca7214e4";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

const fetchMovie = () => {
  return fetch(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchCast = (id) => {
  return fetch(`${BASE_URL}${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      return data.cast;
    })
    .catch((error) => {
      console.log(error);
    });
};

const fetchReviews = (id) => {
  return fetch(
    `${BASE_URL}${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  )
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.log(error);
    });
};
