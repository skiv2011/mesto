import Popup from './Popup.js';

export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  updateSubmitHandler(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', event => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}