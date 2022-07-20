import { popupImg, popupPhoto, popupImageTitle, openPopup } from './utils.js';

export class Card {
  constructor(card, data) {
    this._name = card.name;
    this._link = card.link;
    this._cardsTemplate = data.cardsTemplate;
    this._listcontentData = data.listContentData;
    this._sceneryData = data.sceneryData;
    this._placeData = data.placeData;
    this._likeData = data.likeData;
    this._activeLikeData = data.activeLikeData;
    this._deleteData = data.deleteData;
  }

  /* Размечаем карточку*/
  _getTemplate() {
    const contentTemplate = document.querySelector(this._cardsTemplate).content;
    this._card = contentTemplate.querySelector(this._listcontentData).cloneNode(true);
    this._img = this._card.querySelector(this._sceneryData);
    this._content = this._card.querySelector(this._placeData);
    this._likeCard = this._card.querySelector(this._likeData);
    this._deleteCard = this._card.querySelector(this._deleteData);
    return contentTemplate;
  }

  /* увеличения картинки(zoom)*/
  _setEvetnListeners() {
    this._img.addEventListener('click', () => {
      popupPhoto.setAttribute('src', this._link);
      popupPhoto.setAttribute('alt', this._name);
      popupImageTitle.textContent = this._name;
      openPopup(popupImg);
    });
    /* обработка лайка */
    this._likeCard.addEventListener('click', () => {
      this._likeCard.classList.toggle('element__button-like_active');
    });

    /*удалить карточку*/
    this._deleteCard.addEventListener('click', () => {
      this._card.remove();
      this.card = null;
    });
  }

  /*генерация карточки*/
  generateCard() {
    this._getTemplate();
    this._setEvetnListeners();
    this._img.src = this._link;
    this._img.alt = this._name;
    this._content.textContent = this._name;

    return this._card;
  }
}