export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
<<<<<<< HEAD
    this._handleEscClose = this._handleEscClose.bind(this);
=======
    this._close = this._handleEscClose.bind(this);
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  }

  /* Открыть любой попап */
  open() {
    this._popup.classList.add('popup_opened');
<<<<<<< HEAD
    document.addEventListener('keydown', this._handleEscClose);
=======
    document.addEventListener('keydown', this.handleEscClose);

>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  }

  /* Закрыть любой попап */
  close() {
    this._popup.classList.remove('popup_opened');
<<<<<<< HEAD
    document.removeEventListener('keydown', this._handleEscClose);
=======
    document.removeEventListener('keydown', this.handleEscClose);
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  }

  /* Закрытие попапа нажатием "esc" */
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  };

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-button') || evt.target === evt.currentTarget) {
        this.close()
      }
    });
  }
<<<<<<< HEAD
=======

>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
}