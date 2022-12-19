export default class FormValidator {
  constructor(setting, formElement) {
    this._formSelector = setting.formSelector;
    this._inputSelector = setting.inputSelector;
    this._submitButtonSelector = setting.submitButtonSelector;
    this._inactiveButtonClass = setting.inactiveButtonClass;
    this._inputErrorClass = setting.inputErrorClass;
    this._errorClass = setting.errorClass;
    this._formElement = formElement;
  }

  //Проверка состояния полей
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      if (!this._buttonElement.classList.contains(this._inactiveButtonClass)) {
        this._buttonElement.classList.add(this._inactiveButtonClass);
        this._buttonElement.setAttribute('disabled', true);
      }
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  //Проверить, есть ли на форме хотя бы один некорректный ввод
  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    })
  };

  // Функция проверки валидности полей
  _checkInputValidity(input, error) {
    if (!input.validity.valid) {
      this._showInputError(input, error);
    } else {
      this._hideInputError(input, error);
    }
  }

  // Функция вызова ошибки
  _showInputError(input, error) {
    input.classList.add(this._inputErrorClass);
    error.classList.add(this._errorClass);
    error.textContent = input.validationMessage;
  }
  // Функция которая уберет ошибку
  _hideInputError(input, error) {
    input.classList.remove(this._inputErrorClass);
    error.textContent = '';
    error.classList.remove(this._errorClass);
  }

  // Блокировка кнопки при открытии popap_add
  disableButton() {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
  };

<<<<<<< HEAD
  //Метод для установки обработчиков
  _setEventListeners() {
=======
  // Настройка валидации форм
  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
    this._formElement.addEventListener('input', ((evt) => {
      const input = evt.target;
      const error = this._formElement.querySelector(`#${input.id}-error`);
      this._checkInputValidity(input, error);
      this._toggleButtonState();
    }
    ));
  }

  //метод для очистки ошибок и управления кнопкой
  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      const error = this._formElement.querySelector(`#${inputElement.id}-error`);
      this._hideInputError(inputElement, error)
    });
    this.disableButton();
  }

  // Настройка валидации форм
  enableValidation() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    this._setEventListeners();
  }
}
