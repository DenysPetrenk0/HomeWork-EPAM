/** @format */

const createElem = ({
  nodeType,
  className = null,
  text = null,
  attribute = null,
}) => {
  const elem = document.createElement(nodeType);
  className ? (elem.className = className) : null;
  elem.textContent = text;

  if (attribute) {
    attribute.forEach((item) => {
      elem.setAttribute(item.name, item.value);
    });
  }

  return elem;
};
