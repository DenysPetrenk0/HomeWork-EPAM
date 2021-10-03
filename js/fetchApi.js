/** @format */

const API_KEY = "1f012808e02fe47b316d5e12ca7214e4";
const BASE_URL = "https://api.themoviedb.org/3/movie/";

async function fetchMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}

async function fetchReviews(id) {
  try {
    const response = await fetch(
      `${BASE_URL}${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
