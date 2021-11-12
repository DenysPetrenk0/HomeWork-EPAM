/** @format */

const API_KEY = "1f012808e02fe47b316d5e12ca7214e4";
const BASE_URL = "https://api.themoviedb.org/3/";

const fetchData = (api) => {
  return fetch(`${BASE_URL}${api}`)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
