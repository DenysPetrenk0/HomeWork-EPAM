/** @format */

const murkupBtnSection = (values, selector, nameId) => {
  const container = document.querySelector(selector);

  values.forEach((value, idx) => {
    if (idx < 3) {
      const btn = createElem({
        nodeType: "button",
        text: value.name,
        className: "button-dark content__btn",
        attribute: [{ name: "type", value: "button" }],
        attribute: [{ name: "id", value: `${nameId}_${value.name}` }],
      });
      container.append(btn);
    }
  });
};
