/** @format */

const delay_popup = 10000;
const divModal = document.querySelector("#modaIndex");

const callModalWindow = (selector, content, buttonText, type) => {
  $(selector).modalWindow({
    content: content,
    buttonText: buttonText,
    type: type,
  });
};

setTimeout(function () {
  if (!!divModal) {
    callModalWindow(
      "#modaIndex",
      "Subscribe to this blog and be the first to know about updates",
      ["OK"],
      "success"
    );
  }
}, delay_popup);

$("#containerSection").on("click", (event) => {
  if (event.target.textContent === "Delete Post") {
    callModalWindow(
      "#modalBlog",
      "Are you sure you want to delete this post?",
      ["OK", "Cancel"],
      "error"
    );
  }
});
