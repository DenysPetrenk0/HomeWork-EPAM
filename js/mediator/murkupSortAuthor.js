/** @format */

(function renderSortAuthor() {
  const root = document.getElementById("root");
  const main = document.createElement("main");
  const container = createElem({
    nodeType: "div",
    className: "container content",
    attribute: [{ name: "id", value: "content" }],
  });
  const sectionBtn = createElem({
    nodeType: "section",
    className: "content__horizontal-btn",
  });
  const sectionBtnRight = createElem({
    nodeType: "section",
    className: "content__vertical-btn",
  });
  const sectionListMovie = createElem({
    nodeType: "section",
    className: "content__list-movie",
    attribute: [{ name: "id", value: "movie_list" }],
  });
  const sectionContent = createElem({
    nodeType: "section",
    className: "content__section",
    attribute: [{ name: "id", value: "movie_content" }],
  });

  container.append(
    sectionBtn,
    sectionListMovie,
    sectionContent,
    sectionBtnRight
  );
  main.append(container);

  root.insertAdjacentElement("beforeend", markupHeaderBlog());
  root.insertAdjacentElement("beforeend", main);
  root.insertAdjacentElement("beforeend", markupFooterBlog());
})();

document.addEventListener("DOMContentLoaded", apiService.getPopularMovie());
