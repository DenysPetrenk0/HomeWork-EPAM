const markupMain = () => {
  const main = document.createElement("main");
  const container = createElem({
    nodeType: "div",
    className: "container post_container",
  });
  const postInfo = createElem({
    nodeType: "div",
    className: "post_info",
  });
  const postService = createElem({
    nodeType: "div",
    className: "post_service",
  });
  const borderPost = createElem({
    nodeType: "div",
    className: "border_post",
  });
  const postAuthorBox = createElem({
    nodeType: "div",
    className: "author_post-box",
  });
  const postResult = createElem({
    nodeType: "div",
    className: "author_post_result",
  });
  const reviews = createElem({
    nodeType: "div",
    className: "Reviews",
  });
  const like = createElem({
    nodeType: "div",
    className: "like",
  });
  const tags = createElem({
    nodeType: "div",
    className: "tags",
  });
  const latestPosts = createElem({
    nodeType: "div",
    className: "latest_posts",
  });
  const likeIcon = createElem({
    nodeType: "div",
    className: "like_icon",
  });
  const likeIconHover = createElem({
    nodeType: "div",
    className: "like_icon-hover",
  });
  const tagsBox = createElem({
    nodeType: "div",
    className: "tags_box",
  });
  const categories = createElem({
    nodeType: "div",
    className: "categories",
  });
  const audio = createElem({
    nodeType: "audio",
    className: "post_info_audio",
    attribute: [
      { name: "src", value: "#" },
      { name: "controls", value: "controls" },
    ],
  });
  const postTitle = createElem({
    nodeType: "h1",
    className: "post_info_title",
    text: data.post.title.primary,
  });
  const imgPost = createElem({
    nodeType: "img",
    className: "post_info_img",
    attribute: [
      { name: "src", value: data.post.content.postInfo.img },
      { name: "alt", value: "post photo" },
    ],
  });
  const textPost1 = createElem({
    nodeType: "p",
    className: "author_post_text",
    text: data.post.content.postInfo.textPost.text1,
  });
  const borderPostText = createElem({
    nodeType: "p",
    className: "border_post_text",
    text: data.post.content.postInfo.textPost.text6,
  });
  const likeAmount = createElem({
    nodeType: "p",
    className: "like_amount",
    text: "75 likes",
  });
  const titlePost1 = createElem({
    nodeType: "h2",
    className: "author_post_title-second",
    text: data.post.content.postInfo.textPost.title1,
  });
  const titleTags = createElem({
    nodeType: "h2",
    className: "post_service_title",
    text: data.post.content.postService.tags.title,
  });
  const titleLatestPosts = createElem({
    nodeType: "h2",
    className: "post_service_title",
    text: data.post.content.postService.latestPosts.title,
  });
  const reviewsTitle = createElem({
    nodeType: "h2",
    className: "Reviews_title",
    text: "Reviews",
  });
  const reviewsList = createElem({
    nodeType: "ul",
    className: "Reviews_list",
  });
  const latestPostsList = createElem({
    nodeType: "ul",
    className: "latest_posts_list",
  });
  const likeLink = createElem({
    nodeType: "a",
    className: "like_link",
  });
  const likeIconImg1 = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-like-1.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const likeIconImgHover = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-like-hover.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const btnMoreComments = createElem({
    nodeType: "button",
    className: "button-light Reviews_btn",
    text: "More comments",
    attribute: [{ name: "type", value: "button" }],
  });
  const btnMorePosts = createElem({
    nodeType: "button",
    className: "button-light post_service_btn",
    text: "More posts",
    attribute: [{ name: "type", value: "button" }],
  });
  const autorPost = markupAuthor(data.post.content.postInfo);

  const textPost2 = textPost1.cloneNode(false);
  const textPost3 = textPost1.cloneNode(false);
  const textPost4 = textPost1.cloneNode(false);
  const textPost5 = textPost1.cloneNode(false);
  const textPost6 = textPost1.cloneNode(false);
  const titlePost2 = titlePost1.cloneNode(false);

  textPost2.textContent = data.post.content.postInfo.textPost.text2;
  textPost3.textContent = data.post.content.postInfo.textPost.text3;
  textPost4.textContent = data.post.content.postInfo.textPost.text4;
  textPost5.textContent = data.post.content.postInfo.textPost.text5;
  textPost6.textContent = data.post.content.postInfo.textPost.text7;
  titlePost2.textContent = data.post.content.postInfo.textPost.title2;

  reviews.append(reviewsTitle);
  reviews.append(reviewsList);

  data.post.content.postInfo.reviews.forEach((elem) => {
    const li = createElem({
      nodeType: "li",
      className: "Reviews_item",
    });
    const authorNameBox = createElem({
      nodeType: "div",
      className: "author_name_box",
    });
    const authorNameBoxFlex = createElem({
      nodeType: "div",
      className: "author_name_box-flex",
    });
    const div1 = createElem({
      nodeType: "div",
    });
    const div2 = createElem({
      nodeType: "div",
    });
    const comment = createElem({
      nodeType: "div",
      className: "comment",
    });
    const timeIcon = createElem({
      nodeType: "div",
      className: "time_icon",
    });
    const authorName = createElem({
      nodeType: "p",
      className: "author_name_title",
      text: elem.name,
    });
    const reviewsText = createElem({
      nodeType: "p",
      className: "Reviews_item_text",
      text: elem.text,
    });
    const authorTime = createElem({
      nodeType: "p",
      className: "author_time",
      text: elem.time,
    });
    const reviewsLink = createElem({
      nodeType: "a",
      className: "Reviews_link",
      text: "Read more",
      attribute: [{ name: "src", value: "" }],
    });
    const authorPhoto = createElem({
      nodeType: "img",
      className: "Reviews_img_author",
      attribute: [
        { name: "src", value: elem.img },
        { name: "alt", value: "author photo" },
      ],
    });
    const timeIconImg = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "/images/atoms/a-icon-time.svg" },
        { name: "alt", value: "icon" },
      ],
    });

    elem.stars.forEach((item) => {
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
    const latestPostsItem = createElem({
      nodeType: "li",
      className: "latest_posts_item",
    });
    const latestPostsDisc = createElem({
      nodeType: "div",
      className: "latest_posts_discr",
    });
    const latestPostsImg = createElem({
      nodeType: "img",
      className: "latest_posts_img",
      attribute: [
        { name: "src", value: elem.img },
        { name: "alt", value: elem.text },
        { name: "width", value: 160 },
      ],
    });
    const latestPostsText = createElem({
      nodeType: "p",
      className: "latest_posts_text",
      text: elem.text,
    });

    latestPostsDisc.append(latestPostsText);
    latestPostsDisc.append(markupDescription(elem.description));
    latestPostsItem.append(latestPostsImg);
    latestPostsItem.append(latestPostsDisc);
    latestPostsList.append(latestPostsItem);
  });

  data.post.content.postService.tags.buttonTags.forEach((elem) => {

    const btnTags = createElem({
      nodeType: "button",
      className: "button-light tags_btn",
      text: elem,
      attribute: [{ name: "type", value: "button" }],
    });

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

const renderPost = () => {
  const root = document.getElementById("root");

  root.insertAdjacentElement("beforeend", markupHeaderBlog());
  root.insertAdjacentElement("beforeend", markupMain());
  root.insertAdjacentElement("beforeend", markupFooterBlog());
};

renderPost();
