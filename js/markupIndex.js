/** @format */

const markupHero = () => {
  const section = createElem({
    nodeType: "section",
    className: "hero",
    attribute: [{ name: "id", value: "home" }],
  });
  const container = createElem({ nodeType: "div", className: "container" });
  const btnContainer = createElem({ nodeType: "div", className: "hero__btn" });
  const title = createElem({
    nodeType: "h1",
    className: "hero__title",
    text: data.hero.title.primary,
  });
  const text = createElem({
    nodeType: "p",
    className: "hero__text",
    text: data.hero.title.second,
  });
  const firstBtn = createElem({
    nodeType: "button",
    text: "Explore",
    className: "button-dark hero__btn__dark",
    attribute: [{ name: "type", value: "button" }],
  });
  const secondBtn = createElem({
    nodeType: "button",
    text: "Learn more",
    className: "button-light hero__btn__ligth",
    attribute: [{ name: "type", value: "button" }],
  });

  btnContainer.append(firstBtn);
  btnContainer.append(secondBtn);

  container.append(title);
  container.append(text);
  container.append(btnContainer);
  section.append(container);

  return section;
};

const markupAbout = () => {
  const section = createElem({
    nodeType: "section",
    className: "about section",
    attribute: [{ name: "id", value: "about" }],
  });
  const container = createElem({ nodeType: "div", className: "container" });
  const ul = createElem({ nodeType: "ul", className: "about__examples" });
  const aboutcontainer = createElem({
    nodeType: "div",
    className: "about__container",
  });
  const aboutImg = createElem({
    nodeType: "div",
    className: "about__image__container",
  });
  const divIcon = createElem({
    nodeType: "div",
    className: "play__icon",
  });
  const p = createElem({
    nodeType: "p",
    className: "text",
    text: data.about.title.second,
  });
  const img = createElem({
    nodeType: "img",
    className: "about__img",
    attribute: [
      { name: "src", value: data.about.content.images.src },
      { name: "alt", value: data.about.content.images.alt },
      { name: "width", value: data.about.content.images.width },
    ],
  });
  const imgIconPlay = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-play.svg" },
      { name: "alt", value: "icon" },
    ],
  });

  data.about.content.exampel.forEach((elem, idx) => {
    const li = createElem({ nodeType: "li", className: elem.nameClass });
    const div = createElem({ nodeType: "div", className: "about__icon" });
    const p = createElem({
      nodeType: "p",
      className: "about__text",
      text: elem.text,
    });
    const divCorner = createElem({
      nodeType: "div",
      className: idx % 2 === 0 ? "right__box" : "left__box",
    });
    const img = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: elem.img },
        { name: "alt", value: "icon" },
      ],
    });

    div.append(img);
    li.append(div);
    li.append(p);
    li.append(divCorner);
    ul.append(li);
  });

  divIcon.append(imgIconPlay);
  aboutImg.append(img);
  aboutImg.append(divIcon);
  aboutcontainer.append(ul);
  aboutcontainer.append(aboutImg);
  container.append(markupTitle(data.about.title.primary, "title_border-about"));
  container.append(p);
  container.append(aboutcontainer);
  section.append(container);

  return section;
};

const markupLatestPosts = () => {
  const section = createElem({
    nodeType: "section",
    className: "section",
    attribute: [{ name: "id", value: "latest-posts" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const ul = createElem({
    nodeType: "ul",
    className: "latest-posts__list",
  });
  const p = createElem({
    nodeType: "p",
    className: "text",
    text: data.latestPosts.title.second,
  });

  data.latestPosts.content.forEach((elem) => {
    const li = createElem({
      nodeType: "li",
      className: "latest-posts__item",
    });
    const p = createElem({
      nodeType: "p",
      className: "latest-posts__text",
      text: elem.text,
    });
    const h3 = createElem({
      nodeType: "h3",
      className: "latest-posts__title",
      text: elem.h3,
    });
    const img = createElem({
      nodeType: "img",
      className: "latest-posts__text",
      attribute: [
        { name: "src", value: elem.img.src },
        { name: "width", value: elem.img.width },
      ],
    });

    li.append(img);
    li.append(h3);
    li.append(p);
    li.append(markupDescription(elem.description));
    ul.append(li);
  });

  container.append(
    markupTitle(data.latestPosts.title.primary, "title_border-latest_posts")
  );
  container.append(p);
  container.append(ul);
  section.append(container);

  return section;
};

const markupPortfolio = () => {
  const section = createElem({
    nodeType: "section",
    className: "portfolio section",
    attribute: [{ name: "id", value: "portfolio" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const boxBtnArrow = createElem({
    nodeType: "div",
    className: "box-btn_arrow",
  });
  const divIconBtnLeft = createElem({
    nodeType: "div",
    className: "arrow_icon_left",
  });
  const containerPortfolio = createElem({
    nodeType: "div",
    className: "portfolio__container",
  });
  const divIconBtnRight = createElem({
    nodeType: "div",
    className: "arrow_icon_rigth",
  });
  const ul = createElem({
    nodeType: "ul",
    className: "portfolio__list",
  });
  const p = createElem({
    nodeType: "p",
    className: "text",
    text: data.portfolio.title.second,
  });
  const imgIconBtn = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-arrow.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const btn = createElem({
    nodeType: "button",
    className: "button-light btn-all-works",
    text: "See all works",
    attribute: [{ name: "type", value: "button" }],
  });
  const btnArrowLeft = createElem({
    nodeType: "button",
    className: "button-arrow",
    attribute: [
      { name: "type", value: "button" },
      { name: "id", value: "portfolio-left-btn" },
    ],
  });
  const btnArrowRigth = createElem({
    nodeType: "button",
    className: "button-arrow",
    attribute: [
      { name: "type", value: "button" },
      { name: "id", value: "portfolio-right-btn" },
    ],
  });

  data.portfolio.content.forEach((elem) => {
    const li = createElem({
      nodeType: "li",
      className: "portfolio__item",
    });
    const divIconBox = createElem({
      nodeType: "div",
      className: "portfolio_icon",
    });
    const divText = createElem({
      nodeType: "div",
      className: "text_box",
    });
    const divIcon = createElem({
      nodeType: "div",
      className: "icon_box",
    });
    const img = createElem({
      nodeType: "img",
      attribute: [{ name: "src", value: elem.img }],
    });
    const p = createElem({
      nodeType: "p",
      className: "portfolio__item_text",
      text: elem.text,
    });
    const h3 = createElem({
      nodeType: "h3",
      className: "portfolio__item_title",
      text: elem.h3,
    });
    const imgIconAttach = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-attach.svg" },
        { name: "alt", value: "icon" },
      ],
    });
    const imgIconSearch = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: "./images/atoms/a-icon-search-1.svg" },
        { name: "alt", value: "icon" },
      ],
    });

    const divIconBoxSecond = divIconBox.cloneNode(false);

    divIconBox.append(imgIconAttach);
    divIconBoxSecond.append(imgIconSearch);
    divIcon.append(divIconBox);
    divIcon.append(divIconBoxSecond);
    divText.append(h3);
    divText.append(p);

    li.append(img);
    li.append(divText);
    li.append(divIcon);

    ul.append(li);
  });

  divIconBtnLeft.append(imgIconBtn);
  divIconBtnRight.append(imgIconBtn.cloneNode(false));
  btnArrowLeft.append(divIconBtnLeft);
  btnArrowRigth.append(divIconBtnRight);
  boxBtnArrow.append(btnArrowLeft);
  boxBtnArrow.append(btnArrowRigth);

  container.append(
    markupTitle(data.portfolio.title.primary, "title_border-portfolio")
  );
  containerPortfolio.append(ul);
  containerPortfolio;
  container.append(p);
  container.append(containerPortfolio);
  container.append(boxBtnArrow);
  container.append(btn);
  section.append(container);

  return section;
};

const markupTestimonials = () => {
  const section = createElem({
    nodeType: "section",
    className: "testimonials",
    attribute: [{ name: "id", value: "testimonials" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container testimonials__btn__box",
  });
  const testimonialsContainer = createElem({
    nodeType: "div",
    className: "testimonials__container",
  });
  const divIconBtnLeft = createElem({
    nodeType: "div",
    className: "arrow_icon_left",
  });
  const divIconBtnRight = createElem({
    nodeType: "div",
    className: "arrow_icon_rigth",
  });
  const containerBtn = createElem({
    nodeType: "div",
    className: "btn__container",
  });
  const testimonialsBox = createElem({
    nodeType: "ul",
    className: "slides__container",
  });
  const imgIconBtn = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-arrow.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const btnLeft = createElem({
    nodeType: "button",
    className: "button-arrow",
    attribute: [
      { name: "type", value: "button" },
      { name: "id", value: "testimonials-left-btn" },
    ],
  });
  const btnRight = createElem({
    nodeType: "button",
    className: "button-arrow",
    attribute: [
      { name: "type", value: "button" },
      { name: "id", value: "testimonials-rigth-btn" },
    ],
  });

  data.testimonials.content.forEach((elem) => {
    const testimonialsUser = createElem({
      nodeType: "li",
      className: "testimonials__box",
    });
    const userDiscrp = createElem({
      nodeType: "div",
      className: "testimonials__box_user",
    });
    const userText = createElem({
      nodeType: "p",
      className: "testimonials__box_citation",
      text: elem.text,
    });
    const userName = createElem({
      nodeType: "p",
      className: "testimonials__box_text",
      text: elem.name,
    });
    const userPhoto = createElem({
      nodeType: "img",
      attribute: [
        { name: "src", value: elem.image },
        { name: "alt", value: "user photo" },
        { name: "width", value: 280 },
      ],
    });

    const userProf = userName.cloneNode(false);
    userProf.textContent = elem.profession;

    userDiscrp.append(userText);
    userDiscrp.append(userName);
    userDiscrp.append(userProf);

    testimonialsUser.append(userDiscrp);
    testimonialsUser.append(userPhoto);
    testimonialsBox.append(testimonialsUser);
  });

  divIconBtnLeft.append(imgIconBtn);
  divIconBtnRight.append(imgIconBtn.cloneNode(false));
  btnLeft.append(divIconBtnLeft);
  btnRight.append(divIconBtnRight);
  containerBtn.append(btnLeft);
  containerBtn.append(btnRight);

  testimonialsContainer.append(testimonialsBox);
  container.append(
    markupTitle(data.testimonials.title.primary, "title_border-testimonials")
  );
  container.append(testimonialsContainer);
  container.append(containerBtn);
  section.append(container);

  return section;
};

const markupContact = () => {
  const section = createElem({
    nodeType: "section",
    className: "contact_us section",
    attribute: [{ name: "id", value: "contact" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const contactContainer = createElem({
    nodeType: "div",
    className: "contact_us-box",
  });
  const stepBox = createElem({
    nodeType: "div",
    className: "step_box",
  });
  const mapBox = createElem({
    nodeType: "div",
    className: "map_box",
  });
  const formBox = createElem({
    nodeType: "div",
    className: "form-box",
  });
  const mapTextBox = createElem({
    nodeType: "div",
    className: "map_text-box",
  });
  const iconBox = createElem({
    nodeType: "div",
    className: "map_icon",
  });
  const stepList = createElem({
    nodeType: "ul",
    className: "step_list",
  });
  const p = createElem({
    nodeType: "p",
    className: "text",
    text: data.contact.title.second,
  });
  const mapText = createElem({
    nodeType: "p",
    className: "map-text",
    text: data.contact.content.map.text,
  });
  const formText = createElem({
    nodeType: "p",
    className: "form_text",
    text: "If you need to have a DNA first, just contact us at",
  });
  const stepTitle = createElem({
    nodeType: "h3",
    className: "title_step",
    text: data.contact.content.step.stepTitle,
  });
  const spanText = createElem({
    nodeType: "span",
    className: "input_text",
    text: "Your name",
  });
  const hidepass = createElem({
    nodeType: "span",
    className: "hidepass",
  });
  const hidepassIcon = createElem({
    nodeType: "span",
    className: "hidepass_icon",
  });
  const hidepassText = createElem({
    nodeType: "span",
    className: "hidepass_text",
    text: "show",
  });
  const imgIcon = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-mail.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const imgMap = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: data.contact.content.map.src },
      { name: "alt", value: "map" },
      { name: "width", value: 380 },
    ],
  });
  const iconHidepass = createElem({
    nodeType: "img",
    attribute: [
      { name: "src", value: "./images/atoms/a-icon-hidepass.svg" },
      { name: "alt", value: "icon" },
    ],
  });
  const form = createElem({
    nodeType: "form",
    className: "form_contact-us",
    attribute: [{ name: "action", value: "#" }],
  });
  const labelText = createElem({
    nodeType: "label",
    className: "form_field",
  });
  const inputText = createElem({
    nodeType: "input",
    className: "form-input",
    attribute: [
      { name: "type", value: "text" },
      { name: "name", value: "user-name" },
      { name: "required", value: "required" },
    ],
  });
  const inputEmail = createElem({
    nodeType: "input",
    className: "form-input",
    attribute: [
      { name: "type", value: "email" },
      { name: "name", value: "user-email" },
      { name: "required", value: "required" },
    ],
  });
  const inputPassword = createElem({
    nodeType: "input",
    className: "form-input",
    attribute: [
      { name: "type", value: "password" },
      { name: "name", value: "user-password" },
      { name: "required", value: "required" },
    ],
  });
  const linkEmail = createElem({
    nodeType: "a",
    text: "email@gmail.com",
    attribute: [{ name: "href", value: "mailto:email@gmail.com" }],
  });
  const btnForm = createElem({
    nodeType: "button",
    className: "button-dark form_contact-us_btn",
    text: "Send message",
    attribute: [{ name: "type", value: "submit" }],
  });

  const labeltEmail = labelText.cloneNode(true);
  const labelPassword = labelText.cloneNode(true);
  const spanEmail = spanText.cloneNode(true);
  const spanPassword = spanText.cloneNode(true);
  spanEmail.textContent = "Email";
  spanPassword.textContent = "Password";

  data.contact.content.step.stepList.forEach((elem, idx) => {
    const stepItem = createElem({
      nodeType: "li",
      className: "step_item",
    });
    const ovalBox = createElem({
      nodeType: "div",
      className: "oval_box",
    });
    const ovalBorder = createElem({
      nodeType: "div",
      className: "oval_border",
    });
    const ovalPoint = createElem({
      nodeType: "div",
      className: "oval_border_center",
    });
    const stepItemTitle = createElem({
      nodeType: "p",
      className: "step_title",
      text: `${idx + 1}. ${elem.title}`,
    });
    const stepItemText = createElem({
      nodeType: "p",
      className: "step_text",
      text: elem.text,
    });

    ovalBorder.append(ovalPoint);
    ovalBox.append(ovalBorder);
    stepItem.append(ovalBox);
    stepItem.append(stepItemTitle);
    stepItem.append(stepItemText);
    stepList.append(stepItem);
  });

  iconBox.append(imgIcon);
  mapTextBox.append(iconBox);
  mapTextBox.append(mapText);
  stepBox.append(markupSocialLink());
  stepBox.append(stepTitle);
  stepBox.append(stepList);
  mapBox.append(mapTextBox);
  labelText.append(spanText);
  labelText.append(inputText);
  labeltEmail.append(spanEmail);
  labeltEmail.append(inputEmail);
  hidepass.append(spanPassword);
  hidepassIcon.append(iconHidepass);
  hidepass.append(hidepassIcon);
  hidepass.append(hidepassText);
  labelPassword.append(hidepass);
  labelPassword.append(inputPassword);
  formText.append(linkEmail);
  form.append(labelText);
  form.append(labeltEmail);
  form.append(labelPassword);
  form.append(btnForm);
  form.append(formText);

  formBox.append(form);
  formBox.append(imgMap);
  mapBox.append(formBox);

  container.append(
    markupTitle(data.contact.title.primary, "title_border-contact_us")
  );
  container.append(p);
  container.append(contactContainer);
  contactContainer.append(stepBox);
  contactContainer.append(mapBox);
  section.append(container);

  return section;
};

const renderMarkup = () => {
  const root = document.getElementById("root");
  const main = document.createElement("main");

  main.append(markupHero());
  main.append(markupAbout());
  main.append(markupLatestPosts());
  main.append(markupPortfolio());
  main.append(markupTestimonials());
  main.append(markupContact());

  root.insertAdjacentElement("beforeend", markupHeader());
  root.insertAdjacentElement("beforeend", main);
  root.insertAdjacentElement("beforeend", markupFooter());
};

renderMarkup();
