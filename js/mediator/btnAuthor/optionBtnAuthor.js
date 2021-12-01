/** @format */

const refsBtnAuthor = {
  btnAuthor: document.querySelector(".content__horizontal-btn"),
  btnAuthorRight: document.querySelector(".content__vertical-btn"),
};

const mediatorBtnAuthor = new Mediator(refsBtnAuthor.btnAuthor);
const mediatorBtnAuthorRight = new Mediator(refsBtnAuthor.btnAuthorRight);
mediatorBtnAuthor.addListener();
mediatorBtnAuthorRight.addListener();
