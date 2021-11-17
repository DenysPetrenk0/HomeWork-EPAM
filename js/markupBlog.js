/** @format */
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const VIDEO_URL = "https://www.youtube.com/embed/";
const TEXT_POST = `?api_key=${API_KEY}&language=en-US`;
const VIDEO_POST = `/videos?api_key=${API_KEY}&language=en-US`;
const fullStar = "./images/atoms/star-1.svg";
const emptyStar = "./images/atoms/star-2.svg";
const halfStar = "./images/atoms/star-3.svg";

class Post {
  constructor({ id }) {
    this.id = id;
  }

  createTextPost(text) {
    return createElem({
      nodeType: "p",
      className: "author_blog_text",
      text: text.overview,
    });
  }

  #createTitlePost(text) {
    return createElem({
      nodeType: "p",
      className: "author_blog_title",
      text: text.original_title,
    });
  }
  createAudio() {
    return null;
  }

  createTextContent(result) {
    const blog = this.createPostBox();
    const iconAuthorBlog = this.createPostIcon();
    const blogTitle = this.#createTitlePost(result);
    const blogText = this.createTextPost(result);
    const audio = this.createAudio();
    const infoBlog = createElem({
      nodeType: "div",
      className: "blog_info",
    });
    const authorIconBlog = createElem({
      nodeType: "div",
      className: "author_icon",
    });
    const readMore = createElem({
      nodeType: "button",
      className: "button-light author_btn",
      text: "Read more",
      attribute: [{ name: "type", value: "button" }],
    });
    const deleteBtn = createElem({
      nodeType: "button",
      text: "Delete Post",
      className: "button-light hero__btn__ligth",
      attribute: [{ name: "type", value: "button" }],
    });
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
          value: result.production_companies[0].logo_path
            ? `${IMG_URL}${result.production_companies[0].logo_path}`
            : "../images/authors/Alex.png",
        },
        { name: "alt", value: "author photo" },
      ],
    });

    const authorInfo = createElem({
      nodeType: "div",
      className: "author_info",
    });
    const authorBtnContainer = createElem({
      nodeType: "div",
      className: "author_btn_container",
    });
    const authorName = createElem({
      nodeType: "p",
      className: "author_name",
      text: result.production_companies[0].name,
    });

    const div = markupDescriptionBlog(result, ".author_info");
    authorInfo.append(authorName);
    authorInfo.append(div);
    author.append(authorImg);
    author.append(authorInfo);
    authorIconBlog.append(iconAuthorBlog);
    infoBlog.append(author);
    infoBlog.append(blogTitle);
    audio ? infoBlog.append(audio) : null;
    infoBlog.append(blogText);
    authorBtnContainer.append(readMore);
    authorBtnContainer.append(deleteBtn);
    infoBlog.append(authorBtnContainer);
    infoBlog.append(authorIconBlog);
    blog.append(infoBlog);
    return blog;
  }
}

class PicturePost extends Post {
  constructor({ id, idx }) {
    super(id);
    this.idx = idx;
  }
  createPostBox() {
    return createElem({
      nodeType: "div",
      className: "blog",
      attribute: [{ name: "id", value: "blogImg" + this.idx }],
    });
  }
  createPostIcon() {
    return createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-picture.svg" },
        { name: "alt", value: "icon" },
      ],
    });
  }
  createContent(value) {
    const img = createElem({
      nodeType: "img",
      attribute: [
        {
          name: "src",
          value: `${IMG_URL}${value.backdrop_path}`,
        },
        { name: "alt", value: "blog img" },
        { name: "width", value: 560 },
      ],
    });
    const blog = document.getElementById("blogImg" + this.idx);
    blog.insertAdjacentElement("afterbegin", img);
  }
}
const picturePost = function (id, idx) {
  return new PicturePost({ id: id, idx: idx });
};

class VideoPost extends Post {
  constructor({ id, idx }) {
    super(id);
    this.idx = idx;
  }
  createPostBox() {
    return createElem({
      nodeType: "div",
      className: "blog",
      attribute: [{ name: "id", value: "blogVideo" + this.idx }],
    });
  }
  createPostIcon() {
    return createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-playmini.svg" },
        { name: "alt", value: "icon" },
      ],
    });
  }
  createContent(value) {
    const video = createElem({
      nodeType: "iframe",
      attribute: [
        { name: "width", value: 560 },
        { name: "height", value: 315 },
        {
          name: "src",
          value: `${VIDEO_URL}${value.results[0].key}`,
        },
        { name: "title", value: "YouTube video player" },
        { name: "frameborder", value: "0" },
        {
          name: "frameborder",
          value:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        },
        {
          name: "allowfullscreen",
          value: "allowfullscreen",
        },
      ],
    });
    const blog = document.getElementById("blogVideo" + this.idx);
    if (blog) {
      blog.insertAdjacentElement("afterbegin", video);
    }
  }
}
const videoPost = function (id, idx) {
  return new VideoPost({ id: id, idx: idx });
};

class MusicPost extends Post {
  constructor({ id, idx }) {
    super(id);
    this.idx = idx;
  }
  createPostBox() {
    return createElem({
      nodeType: "div",
      className: "blog",
      attribute: [{ name: "id", value: "blogMusic" + this.idx }],
    });
  }
  createAudio() {
    return createElem({
      nodeType: "audio",
      attribute: [{ name: "controls", value: "controls" }],
    });
  }
  createPostIcon() {
    return createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-melody.svg" },
        { name: "alt", value: "icon" },
      ],
    });
  }
  createContent(value) {
    const img = createElem({
      nodeType: "img",
      attribute: [
        {
          name: "src",
          value: `${IMG_URL}${value.backdrop_path}`,
        },
        { name: "alt", value: "blog img" },
        { name: "width", value: 560 },
      ],
    });
    const blog = document.getElementById("blogMusic" + this.idx);
    blog.insertAdjacentElement("afterbegin", img);
  }
}
const musicPost = function (id, idx) {
  return new MusicPost({ id: id, idx: idx });
};

class TextPost extends Post {
  createPostBox() {
    return createElem({
      nodeType: "div",
      className: "blog",
      attribute: [{ name: "id", value: "blogText" }],
    });
  }
  createPostIcon() {
    return createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-text.svg" },
        { name: "alt", value: "icon" },
      ],
    });
  }
  createTextPost(text) {
    return createElem({
      nodeType: "p",
      className: "author_blog_text_sec",
      text: text.overview,
    });
  }
}
const textPost = function (id) {
  return new TextPost({ id: id });
};

const arrVariantPost = ["picturePost", "videoPost", "musicPost", "textPost"];

const getPost = (id, typePost) => {
  const nodePost = document.getElementById("containerSection");
  if (typePost.constructor.name === "PicturePost") {
    fetchData(`movie/${id}${TEXT_POST}`).then((result) => {
      nodePost.insertAdjacentElement(
        "beforeend",
        typePost.createTextContent(result)
      ),
        typePost.createContent(result);
    });
    return;
  }
  if (typePost.constructor.name === "VideoPost") {
    fetchData(`movie/${id}${TEXT_POST}`).then((result) => {
      nodePost.insertAdjacentElement(
        "beforeend",
        typePost.createTextContent(result)
      );
    });
    fetchData(`movie/${id}${VIDEO_POST}`).then((result) => {
      typePost.createContent(result);
    });
    return;
  }
  if (typePost.constructor.name === "MusicPost") {
    fetchData(`movie/${id}${TEXT_POST}`).then((result) => {
      nodePost.insertAdjacentElement(
        "beforeend",
        typePost.createTextContent(result)
      ),
        typePost.createContent(result);
    });
    return;
  }
  if (typePost.constructor.name === "TextPost") {
    fetchData(`movie/${id}${TEXT_POST}`).then((result) => {
      nodePost.insertAdjacentElement(
        "beforeend",
        typePost.createTextContent(result)
      );
    });
    return;
  }
};

function markupMain() {
  const main = document.createElement("main");
  const container = createElem({
    nodeType: "div",
    className: "container title_blog",
  });
  const section = createElem({
    nodeType: "section",
    className: "content container",
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
  const searchForm = createElem({
    nodeType: "form",
    className: "search_form",
  });
  const chackBoxContainer = createElem({
    nodeType: "div",
    className: "chackBox__container",
  });
  const input = createElem({
    nodeType: "input",
    className: "search_imput",
    attribute: [
      { name: "type", value: "text" },
      { name: "autocomplete", value: "off" },
      { name: "placeholder", value: "Search by author" },
      { name: "required", value: "required" },
    ],
  });
  const chackBoxAuthor = createElem({
    nodeType: "input",
    attribute: [
      { name: "type", value: "radio" },
      { name: "name", value: "chack" },
      { name: "value", value: "author" },
      { name: "data-placeholder", value: "author" },
      { name: "id", value: "author" },
      { name: "checked", value: "checked" },
    ],
  });
  const labelChackBoxAuthor = createElem({
    nodeType: "label",
    text: "author",
    className: "search_chackBox_text",
    attribute: [{ name: "for", value: "author" }],
  });
  const chackBoxMovie = createElem({
    nodeType: "input",
    attribute: [
      { name: "type", value: "radio" },
      { name: "name", value: "chack" },
      { name: "data-placeholder", value: "movie" },
      { name: "value", value: "movie" },
      { name: "id", value: "movie" },
    ],
  });
  const labelChackBoxMovie = createElem({
    nodeType: "label",
    text: "movie",
    className: "search_chackBox_text",
    attribute: [{ name: "for", value: "movie" }],
  });
  const btnSearchInput = createElem({
    nodeType: "button",
    className: "search_btn",
    attribute: [{ name: "type", value: "submit" }],
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

  const containerSection = createElem({
    nodeType: "div",
    className: "container",
    attribute: [{ name: "id", value: "containerSection" }],
  });

  container.append(markupTitle(data.blog.title.primary, "title_border-blog"));
  readMoreContainer.append(readMoreBtn);
  searchIcon.append(imgIconSearch);
  btnSearchInput.append(searchIcon);
  chackBoxContainer.append(chackBoxAuthor);
  chackBoxContainer.append(labelChackBoxAuthor);
  chackBoxContainer.append(chackBoxMovie);
  chackBoxContainer.append(labelChackBoxMovie);
  searchForm.append(input);
  searchForm.append(btnSearchInput);
  searchForm.append(chackBoxContainer);
  search.append(searchForm);
  container.append(search);
  section.append(containerSection);
  main.append(container);
  main.append(section);
  main.append(readMoreContainer);

  return main;
}

const renderBlog = () => {
  const root = document.getElementById("root");
  root.insertAdjacentElement("beforeend", markupHeaderBlog());
  root.insertAdjacentElement("beforeend", markupMain());
  root.insertAdjacentElement("beforeend", markupFooterBlog());
};

renderBlog();

const createBlog = (value) => {
  value.forEach((item, idx) => {
    if (getRandomIntInclusive() === 0) {
      getPost(item.id, picturePost(item.id, idx));
      return;
    }
    if (getRandomIntInclusive() === 1) {
      getPost(item.id, videoPost(item.id, idx));
      return;
    }
    if (getRandomIntInclusive() === 2) {
      getPost(item.id, musicPost(item.id, idx));
      return;
    }
    if (getRandomIntInclusive() === 3) {
      getPost(item.id, textPost(item.id, idx));
      return;
    }
  });
};

const getMovie = () => {
  fetchData(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`).then(
    (result) => {
      createBlog(result.results);
    }
  );
};

document.addEventListener("DOMContentLoaded", getMovie);
