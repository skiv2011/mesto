import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitFormCallback) {
    super(popupSelector);
    this._submitFormCallback = submitFormCallback;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = [...this._form.querySelectorAll('.popup__decription')];
  }

  _getInputValues() {
    const values = {}
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    })
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormCallback(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
<<<<<<< HEAD
  }
=======

  }

>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
}