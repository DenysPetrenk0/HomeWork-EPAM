/** @format */
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const murkupContentSection = (value) => {
  const container = document.querySelector("#movie_content");

  const div = createElem({
    nodeType: "div",
    className: "content__section__box",
  });
  const title = createElem({
    nodeType: "p",
    className: "author_blog_title content__section__title",
    text: value ? value.results[0].original_title : "title",
  });
  const img = createElem({
    nodeType: "img",
    attribute: [
      {
        name: "src",
        value: value
          ? `${IMG_URL}${value.results[0].backdrop_path}`
          : "../../images/sort_author/movie.jpeg",
      },
      { name: "alt", value: "image" },
      { name: "width", value: 800 },
      { name: "height", value: 450 },
    ],
  });
  const text = createElem({
    nodeType: "p",
    className: "content__section__text",
    text: value ? value.results[0].overview : "text",
  });

  value ? div.append(title) : null;
  div.append(img);
  value ? div.append(text) : null;
  container.append(div);
};
murkupContentSection();
