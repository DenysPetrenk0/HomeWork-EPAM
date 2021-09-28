/** @format */

const createElem = ({ nodeType, className, text = null, attribute = null }) => {
  const elem = document.createElement(nodeType);
  elem.className = className;
  elem.textContent = text;

  if (attribute) {
    attribute.forEach((item) => {
      elem.setAttribute(item.name, item.value);
    });
  }

  return elem;
};

// const elem = createElem({
//   nodeType: "",
//   className: "",
//   text: "",
//   attribute: [{ name: "", value: "" }],
// });
