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
  const commetn = date.cloneNode(false);

  date.textContent = value.date;
  time.textContent = value.time;
  commetn.textContent = value.commetn;

  icon.append(img);
  div.append(date);
  div.append(oval);
  div.append(time);
  div.append(oval.cloneNode(false));
  div.append(icon);
  div.append(commetn);

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

const markupHeader = () => {
  const header = document.createElement("header");
  const headerContainer = document.createElement("div");
  const container = document.createElement("div");
  const nav = document.createElement("nav");
  const logo = document.createElement("a");
  const ul = document.createElement("ul");

  header.className = "header";
  headerContainer.className = "header__container";
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
  headerContainer.append(container);
  header.append(headerContainer);

  return header;
};

const markupHero = () => {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const btnContainer = document.createElement("div");
  const title = document.createElement("h1");
  const text = document.createElement("p");
  const firstBtn = createButton("button-dark hero__btn__dark");
  const secondBtn = createButton("button-light hero__btn__ligth");

  section.className = "hero";
  container.className = "container";
  btnContainer.className = "hero__btn";
  title.className = "hero__title";
  text.className = "hero__text";

  section.setAttribute("id", "home");
  title.textContent = data.hero.title.primary;
  text.textContent = data.hero.title.second;
  firstBtn.textContent = "Explore";
  secondBtn.textContent = "Learn more";

  btnContainer.append(firstBtn);
  btnContainer.append(secondBtn);

  container.append(title);
  container.append(text);
  container.append(btnContainer);
  section.append(container);

  return section;
};

const markupAbout = () => {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const aboutcontainer = document.createElement("div");
  const aboutImg = document.createElement("div");
  const divIcon = document.createElement("div");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const imgIconPlay = document.createElement("img");
  const ul = document.createElement("ul");

  section.className = "about section";
  container.className = "container";
  ul.className = "about__examples";
  divIcon.className = "play__icon";
  p.className = "text";
  aboutImg.className = "about__image__container";
  img.className = "about__img";
  aboutcontainer.className = "about__container";

  section.setAttribute("id", "about");
  p.textContent = data.about.title.second;
  img.setAttribute("src", data.about.content.images.src);
  img.setAttribute("alt", data.about.content.images.alt);
  img.setAttribute("width", data.about.content.images.width);
  imgIconPlay.setAttribute("src", "./images/atoms/a-icon-play.svg");
  imgIconPlay.setAttribute("alt", "icon");

  data.about.content.exampel.forEach((elem, idx) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const divCorner = document.createElement("div");
    const p = document.createElement("p");

    li.className = elem.nameClass;
    div.className = "about__icon";
    p.className = "about__text";
    divCorner.className = idx % 2 === 0 ? "right__box" : "left__box";

    img.setAttribute("src", elem.img);
    img.setAttribute("alt", "icon");
    p.textContent = elem.text;

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
  const section = document.createElement("section");
  const container = document.createElement("div");
  const ul = document.createElement("ul");
  const p = document.createElement("p");

  section.className = "section";
  container.className = "container";
  p.className = "text";
  ul.className = "latest-posts__list";

  section.setAttribute("id", "latest-posts");
  p.textContent = data.latestPosts.title.second;

  data.latestPosts.content.forEach((elem) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");

    li.className = "latest-posts__item";
    p.className = "latest-posts__text";
    h3.className = "latest-posts__title";

    img.setAttribute("src", elem.img.src);
    img.setAttribute("width", elem.img.width);
    h3.textContent = elem.h3;
    p.textContent = elem.text;

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
  const section = document.createElement("section");
  const container = document.createElement("div");
  const boxBtnArrow = document.createElement("div");
  const divIconBtnLeft = document.createElement("div");
  const divIconBtnRight = document.createElement("div");
  const ul = document.createElement("ul");
  const p = document.createElement("p");
  const imgIconBtn = document.createElement("img");
  const btn = createButton("button-light btn-all-works");
  const btnArrowLeft = createButton("button-arrow");
  const btnArrowRigth = createButton("button-arrow");

  section.className = "portfolio section";
  container.className = "container";
  p.className = "text";
  ul.className = "portfolio__list";
  boxBtnArrow.className = "box-btn_arrow";
  divIconBtnLeft.className = "arrow_icon_left";
  divIconBtnRight.className = "arrow_icon_rigth";

  section.setAttribute("id", "portfolio");
  p.textContent = data.portfolio.title.second;
  btn.textContent = "See all works";
  imgIconBtn.setAttribute("src", "./images/atoms/a-icon-arrow.svg");
  imgIconBtn.setAttribute("alt", "icon");

  data.portfolio.content.forEach((elem) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const imgIconAttach = document.createElement("img");
    const imgIconSearch = document.createElement("img");
    const p = document.createElement("p");
    const h3 = document.createElement("h3");
    const divText = document.createElement("div");
    const divIcon = document.createElement("div");
    const divIconBox = document.createElement("div");

    li.className = "portfolio__item";
    p.className = "portfolio__item_text";
    h3.className = "portfolio__item_title";
    divText.className = "text_box";
    divIcon.className = "icon_box";
    divIconBox.className = "portfolio_icon";

    const divIconBoxSecond = divIconBox.cloneNode(false);

    img.setAttribute("src", elem.img);
    imgIconAttach.setAttribute("src", "./images/atoms/a-icon-attach.svg");
    imgIconAttach.setAttribute("alt", "icon");
    imgIconSearch.setAttribute("src", "./images/atoms/a-icon-search-1.svg");
    imgIconSearch.setAttribute("alt", "icon");
    h3.textContent = elem.h3;
    p.textContent = elem.text;

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
  container.append(p);
  container.append(ul);
  container.append(boxBtnArrow);
  container.append(btn);
  section.append(container);

  return section;
};

const markupTestimonials = () => {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const testimonialsContainer = document.createElement("div");
  const testimonialsBox = document.createElement("ul");
  const divIconBtnLeft = document.createElement("div");
  const divIconBtnRight = document.createElement("div");
  const btnLeft = createButton("button-arrow");
  const btnRight = createButton("button-arrow");
  const imgIconBtn = document.createElement("img");

  section.className = "testimonials";
  container.className = "container";
  testimonialsContainer.className = "testimonials__container";
  divIconBtnLeft.className = "arrow_icon_left";
  divIconBtnRight.className = "arrow_icon_rigth";

  section.setAttribute("id", "testimonials");
  imgIconBtn.setAttribute("src", "./images/atoms/a-icon-arrow.svg");
  imgIconBtn.setAttribute("alt", "icon");

  data.testimonials.content.forEach((elem) => {
    const testimonialsUser = document.createElement("li");
    const userPhoto = document.createElement("img");
    const userDiscrp = document.createElement("div");
    const userText = document.createElement("p");
    const userName = document.createElement("p");

    testimonialsUser.className = "testimonials__box";
    userDiscrp.className = "testimonials__box_user";
    userText.className = "testimonials__box_citation";
    userName.className = "testimonials__box_text";

    const userProf = userName.cloneNode(false);

    userPhoto.setAttribute("src", elem.image);
    userPhoto.setAttribute("alt", "user photo");
    userPhoto.setAttribute("width", 280);
    userText.textContent = elem.text;
    userName.textContent = elem.name;
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

  testimonialsContainer.append(btnLeft);
  testimonialsContainer.append(testimonialsBox);
  testimonialsContainer.append(btnRight);
  container.append(
    markupTitle(data.testimonials.title.primary, "title_border-testimonials")
  );
  container.append(testimonialsContainer);
  section.append(container);

  return section;
};

const markupContact = () => {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const contactContainer = document.createElement("div");
  const stepBox = document.createElement("div");
  const mapBox = document.createElement("div");
  const formBox = document.createElement("div");
  const mapTextBox = document.createElement("div");
  const p = document.createElement("p");
  const mapText = document.createElement("p");
  const formText = document.createElement("p");
  const stepTitle = document.createElement("h3");
  const stepList = document.createElement("ul");
  const iconBox = document.createElement("div");
  const imgIcon = document.createElement("img");
  const imgMap = document.createElement("img");
  const iconHidepass = document.createElement("img");
  const form = document.createElement("form");
  const labelText = document.createElement("label");
  const spanText = document.createElement("span");
  const hidepass = document.createElement("span");
  const hidepassIcon = document.createElement("span");
  const hidepassText = document.createElement("span");
  const inputText = document.createElement("input");
  const btnForm = createButton("button-dark form_contact-us_btn");
  const linkEmail = document.createElement("a");

  section.className = "contact_us section";
  container.className = "container";
  contactContainer.className = "contact_us-box";
  stepBox.className = "step_box";
  mapBox.className = "map_box";
  formBox.className = "form-box";
  mapTextBox.className = "map_text-box";
  p.className = "text";
  stepTitle.className = "title_step";
  stepList.className = "step_list";
  mapText.className = "map-text";
  iconBox.className = "map_icon";
  form.className = "form_contact-us";
  labelText.className = "form_field";
  spanText.className = "input_text";
  inputText.className = "form-input";
  hidepass.className = "hidepass";
  hidepassIcon.className = "hidepass_icon";
  hidepassText.className = "hidepass_text";
  formText.className = "form_text";

  section.setAttribute("id", "contact");
  p.textContent = data.contact.title.second;
  stepTitle.textContent = data.contact.content.step.stepTitle;
  mapText.textContent = data.contact.content.map.text;
  imgIcon.setAttribute("src", "./images/atoms/a-icon-mail.svg");
  imgIcon.setAttribute("alt", "icon");
  imgMap.setAttribute("src", data.contact.content.map.src);
  imgMap.setAttribute("alt", "map");
  imgMap.setAttribute("width", 380);
  form.setAttribute("action", "#");
  spanText.textContent = "Your name";
  inputText.setAttribute("type", "text");
  inputText.setAttribute("name", "user-name");
  inputText.setAttribute("required", "required");
  iconHidepass.setAttribute("src", "./images/atoms/a-icon-hidepass.svg");
  iconHidepass.setAttribute("alt", "icon");
  hidepassText.textContent = "show";
  btnForm.setAttribute("type", "submit");
  btnForm.textContent = "Send message";
  formText.textContent = "If you need to have a DNA first, just contact us at ";
  linkEmail.textContent = "email@gmail.com";
  linkEmail.setAttribute("href", "mailto:email@gmail.com");

  const labeltEmail = labelText.cloneNode(true);
  const inputEmail = inputText.cloneNode(true);
  const spanEmail = spanText.cloneNode(true);
  spanEmail.textContent = "Email";
  const labelPassword = labelText.cloneNode(true);
  const inputPassword = inputText.cloneNode(true);
  const spanPassword = spanText.cloneNode(true);
  spanPassword.textContent = "Password";

  data.contact.content.step.stepList.forEach((elem, idx) => {
    const stepItem = document.createElement("li");
    const stepItemTitle = document.createElement("p");
    const stepItemText = document.createElement("p");
    const ovalBox = document.createElement("div");
    const ovalBorder = document.createElement("div");
    const ovalPoint = document.createElement("div");

    stepItem.className = "step_item";
    stepItemTitle.className = "step_title";
    stepItemText.className = "step_text";
    ovalBox.className = "oval_box";
    ovalBorder.className = "oval_border";
    ovalPoint.className = "oval_border_center";

    stepItemTitle.textContent = `${idx + 1}. ${elem.title}`;
    stepItemText.textContent = elem.text;

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

const markupFooter = () => {
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  const footerBox = document.createElement("div");
  const logo = document.createElement("a");
  const p = document.createElement("p");

  container.className = "container";
  logo.className = "logo";
  p.className = "footer_box_text";
  footerBox.className = "footer_box";
  footer.className = "footer";

  logo.textContent = data.footer.logo.img;
  logo.setAttribute("href", data.footer.logo.name);
  p.textContent = data.footer.content.text;
  footer.setAttribute("id", "footer");

  footerBox.append(markupSocialLink());
  footerBox.append(logo);
  footerBox.append(p);
  container.append(footerBox);
  footer.append(container);

  return footer;
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
