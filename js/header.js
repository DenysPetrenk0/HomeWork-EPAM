/** @format */

const markupHeader = () => {
  const header = createElem({
    nodeType: "header",
    className: "header",
    attribute: [{ name: "id", value: "header" }],
  });
  const headerContainer = createElem({
    nodeType: "div",
    className: "header__container",
  });
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const nav = createElem({
    nodeType: "nav",
    className: "header__navigation",
  });
  const logo = createElem({
    nodeType: "a",
    className: "logo",
    text: data.header.logo.img,
    attribute: [{ name: "href", value: data.header.logo.href }],
  });
  const ul = createElem({
    nodeType: "ul",
    className: "header__menu",
  });

  data.header.content.forEach((elem) => {
    const li = createElem({
      nodeType: "li",
      className: "header__menu__item",
    });
    const a = createElem({
      nodeType: "a",
      className: "header__menu__link",
      text: elem.name,
      attribute: [{ name: "href", value: elem.href }],
    });

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

const markupHeaderBlog = () => {
  const header = createElem({
    nodeType: "header",
    className: "header__blog",
    attribute: [{ name: "id", value: "header" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const nav = createElem({
    nodeType: "nav",
    className: "header__navigation",
  });
  const logo = createElem({
    nodeType: "a",
    className: "logo",
    text: data.header.logo.img,
    attribute: [{ name: "href", value: data.header.logo.href }],
  });
  const ul = createElem({
    nodeType: "ul",
    className: "header__menu",
  });

  data.header.content.forEach((elem) => {
    const li = createElem({
      nodeType: "li",
      className: "header__menu__item",
    });
    const a = createElem({
      nodeType: "a",
      className: "header__menu__link",
      text: elem.name,
      attribute: [{ name: "href", value: elem.href }],
    });

    li.append(a);
    ul.append(li);
  });

  nav.append(logo);
  nav.append(ul);
  container.append(nav);
  header.append(container);

  return header;
};
