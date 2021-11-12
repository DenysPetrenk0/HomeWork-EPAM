/** @format */

(function ($) {
  const successType = {
    text: "modal-text__success",
    containet: "modal-containet__success",
    button: "modal-btn_success",
  };
  const errorType = {
    text: "modal-text__error",
    containet: "modal-container__error",
    button: "modal-btn_error",
  };
  const confirmType = {
    text: "modal-text__confirm",
    containet: "modal-container__confirm",
    button: "modal-btn_confirm",
  };

  const defauls = {
    content: "success",
    buttonText: ["OK"],
    type: successType,
  };

  class Modal {
    constructor(element, options) {
      this.config = $.extend({}, defauls, options);
      this.element = element;
      this.init();
    }

    toggleModal() {
      $("div.modal").toggleClass("is-hidden");
      $("div.backdrop").toggleClass("backdrop");
      $("body").toggleClass("modal-open");
    }

    escCloseModal(event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        $("div.modal").toggleClass("is-hidden");
        $("div.backdrop").toggleClass("backdrop");
        $("body").toggleClass("modal-open");
      }
    }

    init() {
      if (this.config.type === "success") {
        this.config.type = successType;
      } else if (this.config.type === "error") {
        this.config.type = errorType;
      } else if (this.config.type === "confirm") {
        this.config.type = confirmType;
      }

      const backdrop = $(this.element).addClass("backdrop");
      const modal = $("<div>", {
        class: "modal",
      });
      const btnClose = $("<button>", {
        type: "button",
        class: "close__btn",
      });
      const messageText = $("<p>", {
        class: `message__text ${this.config.type.text}`,
        text: this.config.content,
      });
      const crossIcon = $("<img>", {
        src: "./js/modal/images/cross.svg",
        // src: "./images/cross.svg",
        class: "close__btn__icon",
      });
      const btnContainer = $("<div>", {
        class: `btn-modal__container ${this.config.type.containet}`,
      });

      btnClose.append(crossIcon);
      backdrop.append(modal);
      modal.append(btnClose).append(messageText).append(btnContainer);

      this.config.buttonText.forEach((item) => {
        const btnOk = $("<button>", {
          type: "button",
          class: `button-modal ${this.config.type.button}`,
          text: item,
        });
        btnContainer.append(btnOk);
        btnOk.click(this.toggleModal);
      });

      btnClose.click(this.toggleModal);
      $(document).one("keyup", this.escCloseModal);

      $("body").toggleClass("modal-open");
    }
  }

  $.fn.modalWindow = function (options) {
    new Modal(this, options);
    return this;
  };
})(jQuery);
