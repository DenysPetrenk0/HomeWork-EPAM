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

  returnId(value) {
    return value.results.map((item) => item.id);
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

  createArr(value, name) {
    this.arrDirector.push({ name: name, value: value.crew.length });
    if (this.arrDirector.length >= 20) {
      this.sortResult();
    }
  }

  getCredits(query) {
    query.forEach((item) =>
      fetchData(`movie/${item}/credits?api_key=${API_KEY}&language=en-US`)
        .then((result) => this.findDirector(result))
        .then((result) => this.getPerson(result))
    );
  }

  getPerson(obj) {
    const { name, id } = obj;
    fetchData(
      `person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
    ).then((result) => this.createArr(result, name));
  }

  getPopularMovie() {
    fetchData(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((result) => this.returnId(result))
      .then((result) => this.getCredits(result));
  }

  getInfo({ query, firstCallBack, value }) {
    fetchData(
      `search/${value}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
    ).then((result) => firstCallBack(result, query));
  }
}

const apiService = new ApiService();
