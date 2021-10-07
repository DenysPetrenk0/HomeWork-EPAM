/** @format */
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const fullStar = "./images/atoms/star-1.svg";
const emptyStar = "./images/atoms/star-2.svg";
const halfStar = "./images/atoms/star-3.svg";

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

  value.results.forEach((elem, idx) => {
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
          value: `${IMG_URL}${elem.backdrop_path}`,
        },
        { name: "alt", value: "blog img" },
        { name: "width", value: 560 },
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

    getCast(elem.id, idx);
    getReviews(elem.id, idx);

    authorIconBlog.append(iconAuthorBlog);
    infoBlog.append(blogTitle);
    infoBlog.append(blogText);
    infoBlog.append(readMore);
    infoBlog.append(authorIconBlog);
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
  fetchData(`popular?api_key=${API_KEY}&language=en-US&page=1`).then(
    renderBlog
  );
};

getMovie();

function markupAuthorBlog(value, idx, id) {
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
            ? `${IMG_URL}${value[0].profile_path}`
            : "./images/authors/Grace.png",
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
  getMovieDetails(id, idx, ".author_info");

  authorInfo.append(authorName);
  author.append(authorImg);
  author.append(authorInfo);

  const blogInfo = document.querySelectorAll(".blog_info");
  blogInfo[idx].insertAdjacentElement("afterbegin", author);
}

const getCast = (id, idx) => {
  fetchData(`${id}/credits?api_key=${API_KEY}&language=en-US`).then((value) =>
    markupAuthorBlog(value.cast, idx, id)
  );
};

function murkupCommentBlog(value, id, idx) {
  if (value) {
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
      text: value.content,
    });
    const commentTitle = createElem({
      nodeType: "h2",
      className: "author_blog_title",
      text: value.title,
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
        { name: "src", value: "./images/atoms/a-icon-text.svg" },
        { name: "alt", value: "icon" },
      ],
    });
    const author = createElem({
      nodeType: "div",
      className: "author",
    });
    const authorInfo = createElem({
      nodeType: "div",
      className: "author_info_comment",
    });
    const authorImg = createElem({
      nodeType: "img",
      className: "author_img",
      attribute: [
        {
          name: "src",
          value: "./images/authors/Grace.png",
        },
        { name: "alt", value: "author photo" },
      ],
    });
    const authorName = createElem({
      nodeType: "p",
      className: "author_name",
      text: value.author,
    });

    getMovieDetails(id, idx, ".author_info_comment");

    authorInfo.append(authorName);
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
  }
}

const getReviews = (id, idx) => {
  fetchData(`${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(
    (result) => {
      murkupCommentBlog(result.results[0], id, idx);
    }
  );
};
