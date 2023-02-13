export default class Card {
  constructor({ cardData, cardTemplateSelector, userId, handleCardClick, handleLikeButton, handleRemoveButton }) {
    this._cardNameData = cardData.name;
    this._cardLinkData = cardData.link;
    this._likes = cardData.likes;
    this._cardId = cardData._id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._UserId = userId;
    this._isUserCard = userId === cardData.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeButton = handleLikeButton;
    this._handleRemoveButton = handleRemoveButton;

  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplateSelector)
      .content
      .querySelector('.element__card')
      .cloneNode(true);
  }

  generateCard() {
    this._card = this._getTemplate();

    this._cardTitleElement = this._card.querySelector('.element__subtitle');
    this._cardTitleElement.textContent = this._cardNameData;

    this._cardImageElement = this._card.querySelector('.element__image');
    this._cardImageElement.src = this._cardLinkData;
    this._cardImageElement.alt = `${this._cardNameData}. Фотография`;

    this._buttonDelete = this._card.querySelector('.element__button-delete');

    this._buttonLike = this._card.querySelector('.element__button-like');
    this._likesCounter = this._card.querySelector('.element__like-count');
    this._likesCounter.textContent = this._likes.length;



    this._setEventListeners();
    this._toggleLikesCounter();


    return this._card;
  }


  _setEventListeners() {

    this._cardImageElement.addEventListener('click', () => {
      this._handleCardClick(this._cardNameData, this._cardLinkData);
    });

    this._buttonLike.addEventListener('click', () => {
      this._handleLikeButton();
    });

    if (!this._isUserCard) {
      this._buttonDelete.remove();
      this._buttonDelete = null;
    } else {
      this._card.querySelector('.element__button-delete').addEventListener('click', (event) => {
        this._handleRemoveButton(event);
      });
    }
  }

  _toggleLikesCounter() {
    if (this._checkUserLikes()) {
      this.setLike();
    } else {
      this.unsetLike();
    };
  }

  _checkUserLikes() {
    return this._likes.some(item => item._id === this._UserId);
  }

  setLike() {
    this._buttonLike.classList.add('element__button-like_active');
    this.isLiked = true;
  }

  unsetLike() {
    this._buttonLike.classList.remove('element__button-like_active');
    this.isLiked = false;
  }

  updatelikesCounter(data) {
    this._likesCounter.textContent = data.length;
  }


  getCardId() {
    return this._cardId;
  }
}

