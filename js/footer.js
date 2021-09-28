/** @format */

const markupFooter = () => {
  const footer = createElem({
    nodeType: "footer",
    className: "footer",
    attribute: [{ name: "id", value: "footer" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container",
  });
  const footerBox = createElem({
    nodeType: "div",
    className: "footer_box",
  });
  const logo = createElem({
    nodeType: "a",
    className: "logo",
    text: data.footer.logo.img,
    attribute: [{ name: "href", value: data.footer.logo.name }],
  });
  const p = createElem({
    nodeType: "p",
    className: "footer_box_text",
    text: data.footer.content.text,
  });

  footerBox.append(markupSocialLink());
  footerBox.append(logo);
  footerBox.append(p);
  container.append(footerBox);
  footer.append(container);

  return footer;
};

const markupFooterBlog = () => {
  const footer = createElem({
    nodeType: "footer",
    className: "footer__blog",
    attribute: [{ name: "id", value: "footer" }],
  });
  const container = createElem({
    nodeType: "div",
    className: "container footer_box",
  });
  const logo = createElem({
    nodeType: "a",
    className: "logo",
    text: data.footer.logo.img,
    attribute: [{ name: "href", value: data.footer.logo.name }],
  });
  const p = createElem({
    nodeType: "p",
    className: "footer_box_text",
    text: data.footer.content.text,
  });

  container.append(markupSocialLink());
  container.append(logo);
  container.append(p);
  footer.append(container);

  return footer;
};
