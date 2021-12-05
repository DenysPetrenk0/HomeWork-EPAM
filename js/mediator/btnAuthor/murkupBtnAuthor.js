/** @format */

class MurkupBtnAuthor {
  constructor(values, selector, nameId) {
    this.values = values;
    this.selector = selector;
    this.nameId = nameId;
  }

  createBtn() {
    this.values.forEach((value, idx) => {
      if (idx < 3) {
        const btn = createElem({
          nodeType: "button",
          text: value.name,
          className: "button-dark content__btn",
          attribute: [{ name: "type", value: "button" }],
          attribute: [{ name: "id", value: `${this.nameId}_${value.name}` }],
        });
        document.querySelector(this.selector).append(btn);
      }
    });
  }
}
