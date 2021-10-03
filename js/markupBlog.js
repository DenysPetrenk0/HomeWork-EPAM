/** @format */

const markupMain = (movies) => {
  console.log(movies);
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

  // value.forEach((elem) => console.log(elem));

  movies.forEach((movie) => {
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
          value: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
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
      text: movie.original_title,
    });
    const blogText = createElem({
      nodeType: "p",
      className: "author_blog_text",
      text: movie.overview,
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

    getReviews(movie.id);

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

  data.blog.content.commentBlog.forEach((elem) => {
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
      text: elem.text,
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
        { name: "src", value: elem.icon },
        { name: "alt", value: "icon" },
      ],
    });
    // const author = markupAuthor(elem);

    authorCommentIcon.append(commentIcon);
    // blogComment.append(author);
    blogComment.append(commentTitle);
    blogComment.append(commentText);
    blogComment.append(readMore);
    blogComment.append(authorCommentIcon);
    containerSection.append(blogComment);
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
};

const renderBlog = (results) => {
  const root = document.getElementById("root");

  root.insertAdjacentElement("beforeend", markupHeaderBlog());
  root.insertAdjacentElement("beforeend", markupMain(results.results));
  root.insertAdjacentElement("beforeend", markupFooterBlog());
};

// renderBlog();
function getMovie() {
  fetchMovies().then(renderBlog);
}

getMovie();
