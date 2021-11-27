/** @format */

class Mediator {
  constructor(element, callback) {
    this.element = element;
    this.callback = callback;
  }

  addListener() {
    this.element.addEventListener("click", this.callback);
  }
}
