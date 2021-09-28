/** @format */

const markupSocialLink = () => {
  const ul = createElem({
    nodeType: "ul",
    className: "social_list",
  });

  data.social.forEach((elem) => {
    const li = createElem({
      nodeType: "li",
      className: "social_item",
    });
    const div = createElem({
      nodeType: "div",
      className: "social_icon",
    });
    const a = createElem({
      nodeType: "a",
      className: "social_link",
      attribute: [
        { name: "href", value: elem.href },
        { name: "target", value: "_blank" },
      ],
    });
    const img = createElem({
      nodeType: "img",
      className: "social_link",
      attribute: [
        { name: "src", value: elem.icon },
        { name: "alt", value: "icon" },
      ],
    });

    div.append(img);
    a.append(div);
    li.append(a);
    ul.append(li);
  });
  return ul;
};
