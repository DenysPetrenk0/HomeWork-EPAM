/** @format */

const murkupBtnMovie = (arr, button) => {
  const elemCenter = document.getElementById("movie_list");
  const elemRight = document.getElementById(`right_${button}`);
  const ul = createElem({
    nodeType: "ul",
    className: "movie-info__list",
  });
  arr.results[0].known_for.forEach((item) => {
    const li = createElem({
      nodeType: "li",
      className: "movie-info__list__item",
    });
    const btn = createElem({
      nodeType: "button",
      text: item.original_title || item.original_name,
      className: "movie-info__list__btn",
      attribute: [
        { name: "type", value: "button" },
        { name: "data-name", value: item.original_title || item.original_name },
      ],
    });
    li.append(btn);
    ul.append(li);
  });

  const ulRight = ul.cloneNode(true);
  ulRight.className = "movie-info__list-right";

  elemCenter.append(ul);
  elemRight.after(ulRight);
};
