/** @format */
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
  const postInfo = document.createElement("div");
  const postService = document.createElement("div");
  const postAuthorBox = document.createElement("div");
  const borderPost = document.createElement("div");
  const postResult = document.createElement("div");
  const reviews = document.createElement("div");
  const like = document.createElement("div");
  const tags = document.createElement("div");
  const latestPosts = document.createElement("div");
  const likeIcon = document.createElement("div");
  const likeIconHover = document.createElement("div");
  const tagsBox = document.createElement("div");
  const categories = document.createElement("div");
  const postTitle = document.createElement("h1");
  const autorPost = markupAuthor(data.post.content.postInfo);
  const imgPost = document.createElement("img");
  const audio = document.createElement("audio");
  const textPost1 = document.createElement("p");
  const borderPostText = document.createElement("p");
  const likeAmount = document.createElement("p");
  const titlePost1 = document.createElement("h2");
  const titleTags = document.createElement("h2");
  const titleLatestPosts = document.createElement("h2");
  const likeLink = document.createElement("a");
  const likeIconImg1 = document.createElement("img");
  const likeIconImgHover = document.createElement("img");
  const reviewsTitle = document.createElement("h2");
  const reviewsList = document.createElement("ul");
  const latestPostsList = document.createElement("ul");
  const btnMoreComments = createButton("button-light Reviews_btn");
  const btnMorePosts = createButton("button-light post_service_btn");
  const categoriesMarkup = `
        <h2 class="post_service_title">Categories</h2>
            <details>
              <summary class="categories_title">
                Restaurant food (3)
                <div class="accordion_icon">
                  <img src="./images/atoms/a-icon-arrow.svg" alt="icon" />
                </div>
              </summary>
              <a class="according_menu_link" href="">Action</a>
            </details>
            <details>
              <summary class="categories_title">
                Travel news (3)
                <div class="accordion_icon">
                  <img src="./images/atoms/a-icon-arrow.svg" alt="icon" />
                </div>
              </summary>

              <ul class="according_menu_list">
                <li class="according_menu_item">
                  <a class="according_menu_link" href="">Action</a>
                </li>
                <li class="according_menu_item">
                  <a class="according_menu_link" href="">Another action</a>
                </li>
                <li class="according_menu_item">
                  <a class="according_menu_link" href="">Something else here</a>
                </li>
              </ul>
            </details>
            <details>
              <summary class="categories_title">
                Modern technology (6)
                <div class="accordion_icon">
                  <img src="./images/atoms/a-icon-arrow.svg" alt="icon" />
                </div>
              </summary>
              <a class="according_menu_link" href="">Action</a>
            </details>
            <details>
              <summary class="categories_title">
                Product (4)
                <div class="accordion_icon">
                  <img src="./images/atoms/a-icon-arrow.svg" alt="icon" />
                </div>
              </summary>
              <a class="according_menu_link" href="">Action</a>
            </details>
            <details>
              <summary class="categories_title">
                Inspiration (2)
                <div class="accordion_icon">
                  <img src="./images/atoms/a-icon-arrow.svg" alt="icon" />
                </div>
              </summary>
              <a class="according_menu_link" href="">Action</a>
            </details>
    `;

  container.className = "container post_container";
  postInfo.className = "post_info";
  postService.className = "post_service";
  postTitle.className = "post_info_title";
  imgPost.className = "post_info_img";
  audio.className = "post_info_audio";
  postAuthorBox.className = "author_post-box";
  textPost1.className = "author_post_text";
  titlePost1.className = "author_post_title-second";
  borderPost.className = "border_post";
  borderPostText.className = "border_post_text";
  postResult.className = "author_post_result";
  like.className = "like";
  likeAmount.className = "like_amount";
  likeLink.className = "like_link";
  likeIcon.className = "like_icon";
  likeIconHover.className = "like_icon-hover";
  reviews.className = "Reviews";
  reviewsTitle.className = "Reviews_title";
  reviewsList.className = "Reviews_list";
  tags.className = "tags";
  titleTags.className = "post_service_title";
  tagsBox.className = "tags_box";
  latestPosts.className = "latest_posts";
  titleLatestPosts.className = "post_service_title";
  latestPostsList.className = "latest_posts_list";
  categories.className = "categories";

  const textPost2 = textPost1.cloneNode(false);
  const textPost3 = textPost1.cloneNode(false);
  const textPost4 = textPost1.cloneNode(false);
  const textPost5 = textPost1.cloneNode(false);
  const textPost6 = textPost1.cloneNode(false);
  const titlePost2 = titlePost1.cloneNode(false);

  postTitle.textContent = data.post.title.primary;
  imgPost.setAttribute("src", data.post.content.postInfo.img);
  imgPost.setAttribute("alt", "post photo");
  audio.setAttribute("src", "#");
  audio.setAttribute("controls", "controls");
  likeIconImg1.setAttribute("src", "./images/atoms/a-icon-like-1.svg");
  likeIconImg1.setAttribute("alt", "icon");
  likeIconImgHover.setAttribute("src", "./images/atoms/a-icon-like-hover.svg");
  likeIconImgHover.setAttribute("alt", "icon");
  textPost1.textContent = data.post.content.postInfo.textPost.text1;
  textPost2.textContent = data.post.content.postInfo.textPost.text2;
  textPost3.textContent = data.post.content.postInfo.textPost.text3;
  textPost4.textContent = data.post.content.postInfo.textPost.text4;
  textPost5.textContent = data.post.content.postInfo.textPost.text5;
  textPost6.textContent = data.post.content.postInfo.textPost.text7;
  titlePost1.textContent = data.post.content.postInfo.textPost.title1;
  titlePost2.textContent = data.post.content.postInfo.textPost.title2;
  borderPostText.textContent = data.post.content.postInfo.textPost.text6;
  likeAmount.textContent = "75 likes";
  reviewsTitle.textContent = "Reviews";
  btnMoreComments.textContent = "More comments";
  btnMorePosts.textContent = "More posts";
  titleTags.textContent = data.post.content.postService.tags.title;
  titleLatestPosts.textContent =
    data.post.content.postService.latestPosts.title;

  reviews.append(reviewsTitle);
  reviews.append(reviewsList);

  data.post.content.postInfo.reviews.forEach((elem) => {
    const li = document.createElement("li");
    const authorPhoto = document.createElement("img");
    const authorNameBox = document.createElement("div");
    const authorNameBoxFlex = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const comment = document.createElement("div");
    const timeIcon = document.createElement("div");
    const reviewsLink = document.createElement("a");
    const authorName = document.createElement("p");
    const reviewsText = document.createElement("p");
    const authorTime = document.createElement("p");
    const timeIconImg = document.createElement("img");

    li.className = "Reviews_item";
    authorPhoto.className = "Reviews_img_author";
    authorNameBox.className = "author_name_box";
    authorNameBoxFlex.className = "author_name_box-flex";
    reviewsLink.className = "Reviews_link";
    authorName.className = "author_name_title";
    reviewsText.className = "Reviews_item_text";
    timeIcon.className = "time_icon";
    authorTime.className = "author_time";
    comment.className = "comment";

    authorPhoto.setAttribute("src", elem.img);
    reviewsLink.setAttribute("src", "");
    timeIconImg.setAttribute("src", "/images/atoms/a-icon-time.svg");
    timeIconImg.setAttribute("alt", "icon");
    reviewsLink.textContent = "Read more";
    authorName.textContent = elem.name;
    reviewsText.textContent = elem.text;
    authorTime.textContent = elem.time;

    elem.stars.forEach((item) => {
      const divIconStar = document.createElement("div");
      const imgIconStar = document.createElement("img");

      divIconStar.className = "star_icon";
      imgIconStar.setAttribute("src", item);
      imgIconStar.setAttribute("alt", "icon");

      divIconStar.append(imgIconStar);
      comment.append(divIconStar);
    });

    timeIcon.append(timeIconImg);
    div1.append(authorName);
    div1.append(comment);
    div2.append(timeIcon);
    div2.append(authorTime);
    authorNameBoxFlex.append(div1);
    authorNameBoxFlex.append(div2);
    authorNameBox.append(authorNameBoxFlex);
    authorNameBox.append(reviewsText);
    authorNameBox.append(reviewsLink);

    li.append(authorPhoto);
    li.append(authorNameBox);
    reviewsList.append(li);
  });

  data.post.content.postService.latestPosts.latestPostsList.forEach((elem) => {
    const latestPostsItem = document.createElement("li");
    const latestPostsImg = document.createElement("img");
    const latestPostsDisc = document.createElement("div");
    const latestPostsText = document.createElement("p");

    latestPostsItem.className = "latest_posts_item";
    latestPostsImg.className = "latest_posts_img";
    latestPostsDisc.className = "latest_posts_discr";
    latestPostsText.className = "latest_posts_text";

    latestPostsImg.setAttribute("src", elem.img);
    latestPostsImg.setAttribute("alt", elem.text);
    latestPostsImg.setAttribute("width", 160);
    latestPostsText.textContent = elem.text;

    latestPostsDisc.append(latestPostsText);
    latestPostsDisc.append(markupDescription(elem.description));
    latestPostsItem.append(latestPostsImg);
    latestPostsItem.append(latestPostsDisc);
    latestPostsList.append(latestPostsItem);
  });

  data.post.content.postService.tags.buttonTags.forEach((elem) => {
    const btnTags = createButton("button-light tags_btn");

    btnTags.textContent = elem;

    tagsBox.append(btnTags);
  });

  categories.insertAdjacentHTML("beforeend", categoriesMarkup);

  postAuthorBox.append(textPost1);
  postAuthorBox.append(textPost2);
  postAuthorBox.append(textPost3);
  postAuthorBox.append(titlePost1);
  postAuthorBox.append(textPost4);
  postAuthorBox.append(textPost5);
  postAuthorBox.append(borderPost);
  borderPost.append(borderPostText);
  postAuthorBox.append(titlePost2);
  postAuthorBox.append(textPost6);

  likeIcon.append(likeIconImg1);
  likeIconHover.append(likeIconImgHover);

  likeLink.append(likeIcon);
  likeLink.append(likeIconHover);

  like.append(likeLink);
  like.append(likeAmount);

  postResult.append(like);
  postResult.append(markupSocialLink());
  reviews.append(btnMoreComments);

  postInfo.append(postTitle);
  postInfo.append(autorPost);
  postInfo.append(imgPost);
  postInfo.append(audio);
  postInfo.append(postAuthorBox);
  postInfo.append(postResult);
  postInfo.append(reviews);

  tags.append(titleTags);
  tags.append(tagsBox);
  latestPosts.append(titleLatestPosts);
  latestPosts.append(latestPostsList);
  latestPosts.append(btnMorePosts);
  postService.append(latestPosts);
  postService.append(categories);
  postService.append(tags);

  container.append(postInfo);
  container.append(postService);
  main.append(container);
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

const renderPost = () => {
  const root = document.getElementById("root");

  root.insertAdjacentElement("beforeend", markupHeader());
  root.insertAdjacentElement("beforeend", markupMain());
  root.insertAdjacentElement("beforeend", markupFooter());
};

renderPost();
