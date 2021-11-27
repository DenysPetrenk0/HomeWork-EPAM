/** @format */

class ApiService {
  constructor() {
    this.arrDirector = [];
  }

  sortResult() {
    const arr = this.arrDirector.sort((a, b) => b.value - a.value);
    const btnCenter = new MurkupBtnAuthor(
      arr,
      ".content__horizontal-btn",
      "center"
    );
    const btnRight = new MurkupBtnAuthor(
      arr,
      ".content__vertical-btn",
      "right"
    );
    btnCenter.createBtn();
    btnRight.createBtn();
  }

  findDirector(arr) {
    let value = null;
    arr.crew.forEach((item) => {
      if (item.job === "Director") {
        value = { name: item.name, id: item.id };
      }
    });
    return value;
  }

  getCredits(query) {
    query.forEach((item) => {
      fetchData(`movie/${item}/credits?api_key=${API_KEY}&language=en-US`)
        .then(this.findDirector)
        .then((result) => this.getPerson(result));
    });
  }

  getPerson(obj) {
    const { name, id } = obj;
    fetchData(
      `person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
    ).then((result) => {
      this.arrDirector.push({ name: name, value: result.crew.length });
      if (this.arrDirector.length >= 20) {
        this.sortResult();
      }
    });
  }

  getPopularMovie() {
    fetchData(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((result) => {
        return result.results.map((item) => item.id);
      })
      .then((result) => {
        this.getCredits(result);
      });
  }

  getListAuthor(query) {
    fetchData(
      `search/person?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    ).then((result) => {
      murkupBtnMovie(result.results[0].known_for, query);
    });
  }

  getInfoMovie(query) {
    fetchData(
      `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    ).then((result) => {
      murkupContentSection(result.results[0]);
    });
  }
}

const apiService = new ApiService();
