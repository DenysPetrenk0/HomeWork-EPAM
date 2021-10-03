/** @format */

function markupMain(value) {
  const main = document.createElement("main");
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const section = createElem({
    nodeType: "section",
    className: "content",
  });
  const search = createElem({
    nodeType: "div",
    className: "search",
  });
  const searchIcon = createElem({
    nodeType: "div",
    className: "search_icon",
  });
  const readMoreContainer = createElem({
    nodeType: "div",
    className: "container read-more",
  });
  const input = createElem({
    nodeType: "input",
    className: "search_imput",
    attribute: [
      { name: "type", value: "text" },
      { name: "name", value: "user-name" },
      { name: "placeholder", value: "Search by author" },
      { name: "required", value: "required" },
    ],
  });
  const imgIconSearch = createElem({
    nodeType: "img",
    className: "search_icon",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-search-2.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const readMoreBtn = createElem({
    nodeType: "button",
    className: "button-dark author_btn read-more_btn",
    text: "Read more",
    attribute: [{ name: "type", value: "button" }],
  });

  containerSection = container.cloneNode(false);

  value.forEach((elem, idx) => {
    const blog = createElem({
      nodeType: "div",
      className: "blog",
    });
    const blogIconImg = createElem({
      nodeType: "div",
      className: "blog_play_icon",
    });
    const infoBlog = createElem({
      nodeType: "div",
      className: "blog_info",
    });
    const authorIconBlog = createElem({
      nodeType: "div",
      className: "author_icon",
    });
    const img = createElem({
      nodeType: "img",
      attribute: [
        {
          name: "src",
          value: `https://image.tmdb.org/t/p/w500/${elem.backdrop_path}`,
        },
        { name: "alt", value: "blog img" },
        { name: "width", value: 560 },
      ],
    });
    const imgIconImg = createElem({
      nodeType: "img",
      attribute: [
        // { name: "src", value: elem.image.icon },
        { name: "alt", value: "icon" },
      ],
    });
    const iconAuthorBlog = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-playmini.svg" },
        { name: "alt", value: "icon" },
      ],
    });
    const blogTitle = createElem({
      nodeType: "h2",
      className: "author_blog_title",
      text: elem.original_title,
    });
    const blogText = createElem({
      nodeType: "p",
      className: "author_blog_text",
      text: elem.overview,
    });
    const readMore = createElem({
      nodeType: "a",
      className: "button-light author_btn",
      text: "Read more",
      attribute: [{ name: "href", value: "" }],
    });
    const audio = createElem({
      nodeType: "audio",
      attribute: [{ name: "controls", value: "controls" }],
    });
    getCast(elem.id, idx);

    authorIconBlog.append(iconAuthorBlog);
    // infoBlog.append(author);
    infoBlog.append(blogTitle);
    // elem.audio ? infoBlog.append(audio) : null;
    infoBlog.append(blogText);
    infoBlog.append(readMore);
    infoBlog.append(authorIconBlog);
    // elem.image.icon ? blogIconImg.append(imgIconImg) : null;
    blog.append(blogIconImg);
    blog.append(img);
    blog.append(infoBlog);
    containerSection.append(blog);
  });

  container.append(markupTitle(data.blog.title.primary, "title_border-blog"));
  readMoreContainer.append(readMoreBtn);
  search.append(input);
  searchIcon.append(imgIconSearch);
  search.append(searchIcon);
  container.append(search);
  getReviews();
  section.append(containerSection);
  main.append(container);
  main.append(section);
  main.append(readMoreContainer);

  return main;
}

const renderBlog = (value) => {
  const root = document.getElementById("root");

  root.insertAdjacentElement("beforeend", markupHeaderBlog());
  root.insertAdjacentElement("beforeend", markupMain(value));
  root.insertAdjacentElement("beforeend", markupFooterBlog());
};

const getMovie = () => {
  fetchMovie().then(renderBlog);
};

getMovie();

function markupAuthorBlog(value, idx) {
  const author = createElem({
    nodeType: "div",
    className: "author",
  });
  const authorImg = createElem({
    nodeType: "img",
    className: "author_img",
    attribute: [
      {
        name: "src",
        value:
          value[0].profile_path !== null
            ? `https://image.tmdb.org/t/p/w500/${value[0].profile_path}`
            : "../images/authors/Grace.png",
      },
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
    text: value[0].name,
  });
  const comment = markupDescription();

  data.blog.content.textBlog[0].author.description.stars.forEach((item) => {
    const divIconStar = createElem({
      nodeType: "div",
      className: "star_icon",
    });
    const imgIconStar = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: item },
        { name: "alt", value: "icon" },
      ],
    });

    divIconStar.append(imgIconStar);
    comment.append(divIconStar);
  });

  authorInfo.append(authorName);
  authorInfo.append(comment);
  author.append(authorImg);
  author.append(authorInfo);

  const blogInfo = document.querySelectorAll(".blog_info");
  blogInfo[idx].insertAdjacentElement("afterbegin", author);
}

const getCast = (id, idx) => {
  fetchCast(id).then((value) => markupAuthorBlog(value, idx));
};

function murkupCommentBlog(value) {
  value.forEach((elem) => {
    const blogComment = createElem({
      nodeType: "div",
      className: "blog_comment",
    });
    const authorCommentIcon = createElem({
      nodeType: "div",
      className: "author_icon",
    });
    const commentText = createElem({
      nodeType: "p",
      className: "author_blog_text_comment",
      text: elem.content,
    });
    const commentTitle = createElem({
      nodeType: "h2",
      className: "author_blog_title",
      text: elem.title,
    });
    const readMore = createElem({
      nodeType: "a",
      className: "button-light author_btn",
      text: "Read more",
      attribute: [{ name: "type", value: "button" }],
    });
    const commentIcon = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "../images/atoms/a-icon-text.svg" },
        { name: "alt", value: "icon" },
      ],
    });
    const author = createElem({
      nodeType: "div",
      className: "author",
    });
    const authorInfo = createElem({
      nodeType: "div",
      className: "author_info",
    });
    const authorImg = createElem({
      nodeType: "img",
      className: "author_img",
      attribute: [
        {
          name: "src",
          value: "../images/authors/Grace.png",
        },
        { name: "alt", value: "author photo" },
      ],
    });
    const authorName = createElem({
      nodeType: "p",
      className: "author_name",
      text: elem.author,
    });
    const comment = markupDescription();

    data.blog.content.textBlog[0].author.description.stars.forEach((item) => {
      const divIconStar = createElem({
        nodeType: "div",
        className: "star_icon",
      });
      const imgIconStar = createElem({
        nodeType: "img",
        attribute: [
          { name: "src", value: item },
          { name: "alt", value: "icon" },
        ],
      });

      divIconStar.append(imgIconStar);
      comment.append(divIconStar);
    });
    authorInfo.append(authorName);
    authorInfo.append(comment);
    author.append(authorImg);
    author.append(authorInfo);

    authorCommentIcon.append(commentIcon);
    blogComment.append(author);
    blogComment.append(commentTitle);
    blogComment.append(commentText);
    blogComment.append(readMore);
    blogComment.append(authorCommentIcon);

    const containerSection = document.querySelectorAll(".container");
    containerSection[2].insertAdjacentElement("beforeend", blogComment);
  });
}

const getReviews = () => {
  fetchReviews(550988).then(murkupCommentBlog);
};
