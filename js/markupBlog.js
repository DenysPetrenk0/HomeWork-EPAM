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
  getMovieDetails(id, idx);

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

function murkupCommentBlog(value) {
  value.results.forEach((elem) => {
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
      className: "author_info",
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
      text: elem.author,
    });
    const comment = markupDescription();

    arrStars = translatesRatingIntoStars(elem.author_details.rating);

    arrStars.forEach((item) => {
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
  fetchData(`550988/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(
    murkupCommentBlog
  );
};

const markupDescriptionBlog = (value, idx) => {
  const div = createElem({
    nodeType: "div",
    className: "comment",
  });
  const icon = createElem({
    nodeType: "div",
    className: "comment_icon",
  });
  const date = createElem({
    nodeType: "p",
    className: "latest-posts__comment",
    text: currentDate(value.release_date),
  });
  const oval = createElem({
    nodeType: "p",
    className: "oval",
  });
  const img = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-comment.svg" },
      { name: "alt", value: "icon" },
    ],
  });

  const time = date.cloneNode(false);
  const commetn = date.cloneNode(false);

  time.textContent = `${value.runtime} min read`;
  commetn.textContent = value.revenue;

  icon.append(img);
  div.append(date);
  div.append(oval);
  div.append(time);
  div.append(oval.cloneNode(false));
  div.append(icon);
  div.append(commetn);

  arrStars = translatesRatingIntoStars(value.vote_average);
  arrStars.forEach((item) => {
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
    div.append(divIconStar);
  });

  const authorInfo = document.querySelectorAll(".author_info");
  authorInfo[idx].insertAdjacentElement("beforeend", div);
};

function getMovieDetails(id, idx) {
  fetchData(`${id}?api_key=${API_KEY}&language=en-US`).then((value) => {
    markupDescriptionBlog(value, idx);
  });
}

const month = [
  "jan",
  "feb",
  "mar",
  "apr",
  "May",
  "june",
  "july",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec",
];

function currentDate(value) {
  const date = new Date(Date.parse(value));
  const year = date.getFullYear();
  const wordMonth = month[date.getMonth() + 1];
  const day = date.getDate();

  return `${day} ${wordMonth}, ${year}`;
}

function movieRatingPercent(value) {
  const retingPercent = value * 10;
  return retingPercent;
}

function translatesRatingIntoStars(value) {
  let reting = movieRatingPercent(value);
  let newArr = [];
  for (let i = 0; i < 5; i++) {
    reting = reting - 20;
    if (reting > 0) {
      if (reting >= 20) {
        newArr.push(fullStar);
      } else {
        newArr.push(halfStar);
      }
    } else {
      newArr.push(emptyStar);
    }
  }
  return newArr;
}
