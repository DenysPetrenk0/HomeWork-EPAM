/** @format */

const arrDirector = [];
const sortArr = (a, b) => b.value - a.value;

const sortResult = () => {
  const arr = arrDirector.sort(sortArr);
  murkupBtnSection(arr, ".content__horizontal-btn", "center");
  murkupBtnSection(arr, ".content__vertical-btn", "right");
};

const getArrMovie = (name, id) => {
  fetchData(
    `person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
  ).then((result) => {
    if (result.crew) {
      arrDirector.push({ name: name, value: result.crew.length });
    }
    if (arrDirector.length > 20) {
      sortResult();
    }
  });
};

const findDirector = (arr) => {
  arr.forEach((item) => {
    if (item.job === "Director") {
      getArrMovie(item.name, item.id);
    }
  });
};

const getPopular = () => {
  fetchData(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(
    (result) => {
      result.results.forEach((item) => {
        getCredits(item.id);
      });
    }
  );
};

const getCredits = (query) => {
  fetchData(`movie/${query}/credits?api_key=${API_KEY}&language=en-US`).then(
    (result) => {
      findDirector(result.crew);
    }
  );
};

const getListAuthor = (query) => {
  fetchData(
    `search/person?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then((result) => {
    markupMovieList(result.results[0].known_for, query);
  });
};

const getInfoMovie = (query) => {
  fetchData(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then((result) => {
    murkupContentSection(result.results[0]);
  });
};
