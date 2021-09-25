/** @format */

const markupDescription = (value) => {
  const div = createElem({
    nodeType: "div",
    className: "comment",
  });
  const icon = createElem({
    nodeType: "div",
    className: "comment_icon",
  });
  const date = createElem({
    nodeType: "p",
    className: "latest-posts__comment",
    text: value.date,
  });
  const oval = createElem({
    nodeType: "p",
    className: "oval",
  });
  const img = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-comment.svg" },
      { name: "alt", value: "icon" },
    ],
  });

  const time = date.cloneNode(false);
  const commetn = date.cloneNode(false);

  time.textContent = value.time;
  commetn.textContent = value.commetn;

  icon.append(img);
  div.append(date);
  div.append(oval);
  div.append(time);
  div.append(oval.cloneNode(false));
  div.append(icon);
  div.append(commetn);

  return div;
};
