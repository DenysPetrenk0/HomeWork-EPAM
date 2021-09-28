/** @format */

const markupTitle = (value, borderClass) => {
  const div = createElem({
    nodeType: "div",
    className: "title_box",
  });
  const border = createElem({
    nodeType: "div",
    className: borderClass,
  });
  const h2 = createElem({
    nodeType: "h2",
    className: "title",
    text: value,
  });

  div.append(h2);
  div.append(border);

  return div;
};
