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

<<<<<<< HEAD
  _toggleLike() {
    this._buttonLike.classList.toggle('element__button-like_active');
  }

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }

  _handleImageClick() {
    this._handleCardClick({ link: this._link, name: this._name });
  }

  _setListeners() {
    //обработка лайка
    this._buttonLike.addEventListener('click', () => this._toggleLike());
    //удалить карточку
    this._buttonDelete.addEventListener('click', () => this._deleteCard());
    //открытие фото при клике на карточку
    this._image.addEventListener('click', () => this._handleImageClick());
  }

=======
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

>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
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