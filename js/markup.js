/** @format */
const data = {
  header: {
    content: [],
  },
  hero: {
    title: {
      primary: "Contact us",
      second:
        "Put there articles successfully special warrant submit agree what along then",
    },
    content: [],
  },
  about: {
    title: {
      primary: "Contact us",
      second:
        "Put there articles successfully special warrant submit agree what along then",
    },
    content: [],
  },
  latestPosts: {
    title: {
      primary: "Latest posts",
      second:
        "   Information is a source of learning. But unless it is organized, processed and available to the right people",
    },
    content: [
      {
        img: { src: "./images/post1.png", width: 360 },
        h3: "In the Future We Will All Live in Star Wars",
        text: "The thing you’re doing now, reading prose on a screen, is going out of fashion. The defining narrative of our online moment concerns the decline of text, and the exploding reach and power of audio and video…",
        description: { date: "20 oct, 2019", time: "10 min read", commetn: 11 },
      },
      {
        img: { src: "./images/post2.png", width: 360 },
        h3: "Rubik’s Cube? No, Robotics and AI are…",
        text: "In other words, I will try to de-hype the crowd about the recent development in robotics. Concretely, OpenAI has claimed some pretty amazing results with learning to solve the Rubik’s cube with a robotic hand…",
        description: { date: "11 oct, 2019", time: "7 min read", commetn: 19 },
      },
      {
        img: { src: "./images/post3.png", width: 360 },
        h3: "How the Internet of Things will Transfo…",
        text: "The Internet of Things (IoT) promises to be the most important technological development for consumers since the advent of the smartphone. Experts believe that this collection of internet-connected technolog…",
        description: { date: "28 sep, 2019", time: "16 min read", commetn: 41 },
      },
    ],
  },
  portfolio: {
    title: {
      primary: "Latest portfolio",
      second:
        "Put there articles successfully special warrant submit agree what along then",
    },
    content: [
      {
        img: "./images/portfolio1.png",
        h3: "Art Ocean",
        text: "Photography, art, nature",
      },
      {
        img: "./images/portfolio2.png",
        h3: "City guide",
        text: "Photography, city, way",
      },
      {
        img: "./images/portfolio3.png",
        h3: "Mountains",
        text: "Art, hiking",
      },
    ],
  },
  testimonials: {
    title: {
      primary: "Testimonials",
      second: "",
    },
    content: [],
  },
  contact: {
    title: {
      primary: "Contact us",
      second:
        "Put there articles successfully special warrant submit agree what along then",
    },
    content: [],
  },
  footer: {
    content: [],
  },
};
console.log(data);

const refs = {
  latestPosts: document.querySelector("#latest-posts"),
  portfolio: document.querySelector("#portfolio"),
};

const markupTitle = (value, borderClass) => {
  console.log(value);
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

const button = (classBtn) => {
  const btn = document.createElement("button");
  btn.className = classBtn;
  btn.setAttribute("type", button);

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

const markupLatestPosts = () => {
  const containet = document.createElement("div");
  const ul = document.createElement("ul");
  const p = document.createElement("p");

  containet.className = "container";
  p.className = "text";
  ul.className = "latest-posts__list";

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

  containet.append(
    markupTitle(data.latestPosts.title.primary, "title_border-latest_posts")
  );
  containet.append(p);
  containet.append(ul);

  return containet;
};

const markupPortfolio = () => {
  const containet = document.createElement("div");
  const boxBtnArrow = document.createElement("div");
  const divIconBtnLeft = document.createElement("div");
  const divIconBtnRight = document.createElement("div");
  const ul = document.createElement("ul");
  const p = document.createElement("p");
  const imgIconBtn = document.createElement("img");
  const btn = button("button-light btn-all-works");
  const btnArrowLeft = button("button-arrow");
  const btnArrowRigth = button("button-arrow");

  containet.className = "container";
  p.className = "text";
  ul.className = "portfolio__list";
  boxBtnArrow.className = "box-btn_arrow";
  divIconBtnLeft.className = "arrow_icon_left";
  divIconBtnRight.className = "arrow_icon_rigth";

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

  containet.append(
    markupTitle(data.portfolio.title.primary, "title_border-portfolio")
  );
  containet.append(p);
  containet.append(ul);
  containet.append(boxBtnArrow);
  containet.append(btn);

  return containet;
};

const markupTestimonials = () => {
  const containet = document.createElement("div");

  containet.className = "container";
  return containet;
};

const markupContact = () => {
  const containet = document.createElement("div");

  containet.className = "container";
  return containet;
};

const renderMarkup = () => {
  refs.latestPosts.insertAdjacentElement("beforeend", markupLatestPosts());
  refs.portfolio.insertAdjacentElement("beforeend", markupPortfolio());
};

renderMarkup();
