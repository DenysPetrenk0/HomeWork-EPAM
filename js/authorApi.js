/** @format */

const markupAuthorApi = (value) => {
  console.log(value.results[0]);
  const author = createElem({
    nodeType: "div",
    className: "author",
  });
  const authorImg = createElem({
    nodeType: "img",
    className: "author_img",
    attribute: [
      // { name: "src", value: value.author.photo },
      { name: "alt", value: "author photo" },
    ],
  });
  const authorInfo = createElem({
    nodeType: "div",
    className: "author_info",
  });
  const authorName = createElem({
    nodeType: "p",
    className: "author_name",
    text: value.results ? value.results[0].author : "Name Surname",
  });
  // const comment = markupDescription(value.author.description);

  // value.author.description.stars.forEach((item) => {
  //   const divIconStar = createElem({
  //     nodeType: "div",
  //     className: "star_icon",
  //   });
  //   const imgIconStar = createElem({
  //     nodeType: "img",
  //     attribute: [
  //       { name: "src", value: item },
  //       { name: "alt", value: "icon" },
  //     ],
  //   });

  //   divIconStar.append(imgIconStar);
  //   comment.append(divIconStar);
  // });

  authorInfo.append(authorName);
  // authorInfo.append(comment);
  author.append(authorImg);
  author.append(authorInfo);
  return author;
};

const renderAuthor = (value) => {
  const infoBlogNode = document.querySelectorAll(".blog_info");
  infoBlogNode.forEach((elem) => {
    // elem.insertAdjacentElement("beforeBegin", markupAuthorApi(value));
  });
};

function getReviews(id) {
  fetchReviews(id).then(renderAuthor);
}
