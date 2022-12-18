export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._close = this._handleEscClose.bind(this);
  }

  /* Открыть любой попап */
  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this.handleEscClose);

  }

  /* Закрыть любой попап */
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this.handleEscClose);
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

}