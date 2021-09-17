/** @format */
const markupTitle = (value, borderClass) => {
  let div = document.createElement("div");
  let border = document.createElement("div");
  let h2 = document.createElement("h2");

  h2.className = "title";
  div.className = "title_box";
  border.className = borderClass;

  h2.textContent = value;

  div.append(h2);
  div.append(border);

  return div;
};

const createButton = (classBtn) => {
  const btn = document.createElement("button");
  btn.className = classBtn;
  btn.setAttribute("type", "button");

  return btn;
};

const markupDescription = (value) => {
  const div = document.createElement("div");
  const icon = document.createElement("div");
  const date = document.createElement("p");
  const img = document.createElement("img");
  const oval = document.createElement("p");

  div.className = "comment";
  icon.className = "comment_icon";
  date.className = "latest-posts__comment";
  oval.className = "oval";

  img.setAttribute("src", "./images/atoms/a-icon-comment.svg");
  img.setAttribute("alt", "icon");

  const time = date.cloneNode(false);
  const text = date.cloneNode(false);

  date.textContent = value.date;
  time.textContent = value.time;
  text.textContent = value.commetn;

  icon.append(img);
  div.append(date);
  div.append(oval);
  div.append(time);
  div.append(oval.cloneNode(false));
  div.append(icon);
  div.append(text);

  value.stars
    ? value.stars.forEach((elem) => {
        const divIconStar = document.createElement("div");
        const imgIconStar = document.createElement("img");

        divIconStar.className = "star_icon";
        imgIconStar.setAttribute("src", elem);
        imgIconStar.setAttribute("alt", "icon");

        divIconStar.append(imgIconStar);
        div.append(divIconStar);
      })
    : null;

  return div;
};

const markupSocialLink = () => {
  const ul = document.createElement("ul");
  ul.className = "social_list";

  data.social.forEach((elem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const div = document.createElement("div");
    const img = document.createElement("img");

    li.className = "social_item";
    a.className = "social_link";
    div.className = "social_icon";

    a.setAttribute("href", elem.href);
    a.setAttribute("target", "_blank");
    img.setAttribute("src", elem.icon);
    img.setAttribute("alt", "icon");

    div.append(img);
    a.append(div);
    li.append(a);
    ul.append(li);
  });
  return ul;
};

const markupAuthor = (value) => {
  const author = document.createElement("div");
  const authorImg = document.createElement("img");
  const authorInfo = document.createElement("div");
  const authorName = document.createElement("p");
  const comment = markupDescription(value.author.description);

  author.className = "author";
  authorImg.className = "author_img";
  authorInfo.className = "author_info";
  authorName.className = "author_name";

  authorImg.setAttribute("src", value.author.photo);
  authorImg.setAttribute("alt", "author photo");
  authorName.textContent = value.author.name;

  authorInfo.append(authorName);
  authorInfo.append(comment);
  author.append(authorImg);
  author.append(authorInfo);

  return author;
};

const markupHeader = () => {
  const header = document.createElement("header");
  const headerContainer = document.createElement("div");
  const container = document.createElement("div");
  const nav = document.createElement("nav");
  const logo = document.createElement("a");
  const ul = document.createElement("ul");

  header.className = "header__blog";
  container.className = "container";
  nav.className = "header__navigation";
  logo.className = "logo";
  ul.className = "header__menu";

  logo.textContent = data.header.logo.img;
  logo.setAttribute("href", data.header.logo.href);
  header.setAttribute("id", "header");

  data.header.content.forEach((elem) => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.className = "header__menu__item";
    a.className = "header__menu__link";

    a.setAttribute("href", elem.href);
    a.textContent = elem.name;

    li.append(a);
    ul.append(li);
  });

  nav.append(logo);
  nav.append(ul);
  container.append(nav);
  header.append(container);

  return header;
};

const markupMain = () => {
  const main = document.createElement("main");
  const container = document.createElement("div");
  const search = document.createElement("div");
  const searchIcon = document.createElement("div");
  const readMoreContainer = document.createElement("div");
  const section = document.createElement("section");
  const input = document.createElement("input");
  const imgIconSearch = document.createElement("img");
  const readMoreBtn = createButton("button-dark author_btn read-more_btn");

  container.className = "container";
  section.className = "content";
  search.className = "search";
  input.className = "search_imput";
  searchIcon.className = "search_icon";
  imgIconSearch.className = "search_icon";
  readMoreContainer.className = "container read-more";
  containerSection = container.cloneNode(false);

  input.setAttribute("type", "text");
  input.setAttribute("name", "user-name");
  input.setAttribute("placeholder", "Search by author");
  input.setAttribute("placeholder", "Search by author");
  input.setAttribute("required", "required");
  imgIconSearch.setAttribute("src", "./images/atoms/a-icon-search-2.svg");
  imgIconSearch.setAttribute("alt", "icon");
  readMoreBtn.textContent = "Read more";

  data.blog.content.textBlog.forEach((elem) => {
    const blog = document.createElement("div");
    const blogIconImg = document.createElement("div");
    const infoBlog = document.createElement("div");
    const authorIconBlog = document.createElement("div");
    const img = document.createElement("img");
    const imgIconImg = document.createElement("img");
    const iconAuthorBlog = document.createElement("img");
    const blogTitle = document.createElement("h2");
    const blogText = document.createElement("p");
    const readMore = document.createElement("a");
    const audio = document.createElement("audio");
    const author = markupAuthor(elem);

    blog.className = "blog";
    blogIconImg.className = "blog_play_icon";
    infoBlog.className = "blog_info";
    blogTitle.className = "author_blog_title";
    blogText.className = "author_blog_text";
    readMore.className = "button-light author_btn";
    authorIconBlog.className = "author_icon";

    img.setAttribute("src", elem.image.src);
    img.setAttribute("alt", "blog img");
    img.setAttribute("width", 560);
    imgIconImg.setAttribute("src", elem.image.icon);
    imgIconImg.setAttribute("alt", "icon");

    blogTitle.textContent = elem.title;
    blogText.textContent = elem.text;
    readMore.setAttribute("href", "");
    iconAuthorBlog.setAttribute("src", elem.icon);
    iconAuthorBlog.setAttribute("alt", "icon");
    audio.setAttribute("src", elem.audio);
    audio.setAttribute("controls", "controls");

    readMore.textContent = "Read more";

    authorIconBlog.append(iconAuthorBlog);

    infoBlog.append(author);
    infoBlog.append(blogTitle);
    elem.audio ? infoBlog.append(audio) : null;
    infoBlog.append(blogText);
    infoBlog.append(readMore);
    infoBlog.append(authorIconBlog);
    elem.image.icon ? blogIconImg.append(imgIconImg) : null;
    blog.append(blogIconImg);
    blog.append(img);
    blog.append(infoBlog);
    containerSection.append(blog);
  });

  data.blog.content.commentBlog.forEach((elem) => {
    const blogComment = document.createElement("div");
    const blogCommentAuthor = document.createElement("div");
    const commentIcon = document.createElement("img");
    const authorCommentIcon = document.createElement("div");
    const authorName = document.createElement("p");
    const commentTitle = document.createElement("h2");
    const commentText = document.createElement("p");
    const readMore = document.createElement("a");
    const author = markupAuthor(elem);

    blogComment.className = "blog_comment";
    blogCommentAuthor.className = "blog_comment_author";
    authorName.className = "author_name";
    commentTitle.className = "author_blog_title";
    commentText.className = "author_blog_text_comment";
    readMore.className = "button-light author_btn";
    authorCommentIcon.className = "author_icon";

    authorName.textContent = elem.author.name;
    commentTitle.textContent = elem.title;
    commentText.textContent = elem.text;
    readMore.textContent = "Read more";
    commentIcon.setAttribute("src", elem.icon);
    commentIcon.setAttribute("alt", "icon");

    authorCommentIcon.append(commentIcon);
    blogComment.append(author);
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

const markupFooter = () => {
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  const logo = document.createElement("a");
  const p = document.createElement("p");

  footer.className = "footer__blog";
  container.className = "container footer_box";
  logo.className = "logo";
  p.className = "footer_box_text";

  logo.textContent = data.footer.logo.img;
  logo.setAttribute("href", data.footer.logo.name);
  p.textContent = data.footer.content.text;
  footer.setAttribute("id", "footer");

  container.append(markupSocialLink());
  container.append(logo);
  container.append(p);
  footer.append(container);

  return footer;
};

const renderBlog = () => {
  const root = document.getElementById("root");

  root.insertAdjacentElement("beforeend", markupHeader());
  root.insertAdjacentElement("beforeend", markupMain());
  root.insertAdjacentElement("beforeend", markupFooter());
};

renderBlog();
