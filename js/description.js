/** @format */

const markupDescription = (value) => {
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
    text: value.date,
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

const markupDescriptionBlog = (value) => {
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
  return div;
};

function getMovieDetails(id, idx, nameClass) {
  fetchData(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((value) => {
    markupDescriptionBlog(value, idx, nameClass);
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
