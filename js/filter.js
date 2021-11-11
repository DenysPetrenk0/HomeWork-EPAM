/** @format */

const refsFilter = {
  form: document.querySelector(".search_form"),
  search: document.querySelector(".search_imput"),
  radioAuthor: document.getElementById("author"),
  radioMovie: document.getElementById("movie"),
  content: document.getElementById("containerSection"),
};
let query = "";

const noResult = createElem({
  nodeType: "p",
  className: "no_result",
  text: "NO RESULT",
});

const searchData = (value, query, path) => {
  refsFilter.content.innerHTML = "";

  fetchData(
    `search/${value}?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  ).then((result) => {
    if (!result.total_results) {
      refsFilter.content.innerHTML = "";
      refsFilter.content.insertAdjacentElement("beforeend", noResult);
      return;
    }
    path ? createBlog(result.results[0].known_for) : createBlog(result.results);
  });
};

const getInputValue = () => {
  try {
    const savedStrQuery = localStorage.getItem("query");
    const savedStrRadio = localStorage.getItem("checked");
    if (savedStrQuery) {
      refsFilter.search.value = savedStrQuery;
    }
    if (savedStrRadio === "author") {
      refsFilter.radioAuthor.checked = "checked";
    }
    if (savedStrRadio === "movie") {
      refsFilter.radioMovie.checked = "checked";
    }
  } catch (error) {
    console.log(error.message);
    return;
  }
};

getInputValue();

const changeNamePlaceholder = (event) => {
  const { type, dataset, id } = event.target;
  let checkedImput = "";
  if (type === "radio") {
    refsFilter.search.placeholder = `Search by ${dataset.placeholder}`;
    checkedImput = id;
  }
  localStorage.setItem("checked", checkedImput);
};

const searchForm = (event) => {
  query = refsFilter.search.value;
  event.preventDefault();
  refsFilter.search.value = "";
  localStorage.setItem("query", query);

  if (refsFilter.radioAuthor.checked) {
    searchData("person", query, 1);
    localStorage.setItem("checked", "author");
    return;
  }
  if (refsFilter.radioMovie.checked) {
    searchData("movie", query, 0);
    localStorage.setItem("checked", "movie");
    return;
  }
};

refsFilter.form.addEventListener("change", changeNamePlaceholder);
refsFilter.form.addEventListener("submit", searchForm);
