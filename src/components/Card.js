export default class Card {
  constructor(card, data, handleCardClick) {
    this._name = card.name;
    this._link = card.link;
    this._cardsTemplate = data.cardsTemplate;
    this._listcontentData = data.listContentData;
    this._sceneryData = data.sceneryData;
    this._placeData = data.placeData;
    this._likeData = data.likeData;
    this._activeLikeData = data.activeLikeData;
    this._deleteData = data.deleteData;
    this._handleCardClick = handleCardClick;
  }

  //разметка карточки
  _getTemplate() {
    const contentTemplate = document.querySelector(this._cardsTemplate).content;
    this._card = contentTemplate.querySelector(this._listcontentData).cloneNode(true);
    this._image = this._card.querySelector(this._sceneryData);
    this._content = this._card.querySelector(this._placeData);
    this._buttonLike = this._card.querySelector(this._likeData);
    this._buttonDelete = this._card.querySelector(this._deleteData);
    return contentTemplate;
  }

  _setListeners() {
    //обработка лайка
    this._buttonLike.addEventListener('click', () => {
      this._buttonLike.classList.toggle('element__button-like_active');
    });

    //удалить карточку
    this._buttonDelete.addEventListener('click', () => {
      this._card.remove();
      this.card = null;
    });
    //открытие фото при клике на карточку
    this._image.addEventListener('click', () => {
      this._handleCardClick({ link: this._link, name: this._name });
    })
  }

  //генерация карточки
  generateCard() {
    this._getTemplate();
    this._setListeners();
    this._image.src = this._link;
    this._image.alt = this._name;
    this._content.textContent = this._name;
    return this._card;
  }
}