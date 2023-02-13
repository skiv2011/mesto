// export default class Card {
//   constructor(card, data, handleCardClick, handleDeleteCard, handleLikeClick) {
//     this._name = card.name;
//     this._link = card.link;
//     this._id = card.id;
//     this._cardLike = card.likes;
//     this._userId = card.userId;
//     this._ownerId = card.ownerId;
//     this._cardsTemplate = data.cardsTemplate;
//     this._listContentData = data.listContentData;
//     this._sceneryData = data.sceneryData;
//     this._placeData = data.placeData;
//     this._likeData = data.likeData;
//     this._activeLikeData = data.activeLikeData;
//     this._likeCountData = data.likeCountData;
//     this._deleteData = data.deleteData;
//     this._handleCardClick = handleCardClick;
//     this._handleDeleteCard = handleDeleteCard;
//     this._handleLikeClick = handleLikeClick;
//   }

//   //разметка карточки
//   _getTemplate() {
//     const contentTemplate = document.querySelector(this._cardsTemplate).content;
//     this._card = contentTemplate.querySelector(this._listContentData).cloneNode(true);
//     this._image = this._card.querySelector(this._sceneryData);
//     this._content = this._card.querySelector(this._placeData);
//     this._buttonLike = this._card.querySelector(this._likeData);
//     this._buttonDelete = this._card.querySelector(this._deleteData);
//     this._likeCountCard = this._card.querySelector(this._likeCountData);
//     return contentTemplate;
//   }

//   isLiked() {
//     const userHasLikedCard = this._cardLike.find(user => user._id === this._userId);
//     return userHasLikedCard;
//   }

//   setLikeCountCard(newLikes) {
//     this._cardLike = newLikes;
//     this._likeCountCard.textContent = this._cardLike.length;

//     if (this.isLiked()) {
//       this._buttonLike.classList.add('element__button-like_active');
//     } else {
//       this._buttonLike.classList.remove('element__button-like_active');
//     }
//   }


// deleteCard() {
//   this._card.remove();
//   this._card = null;
// }

//   _handleImageClick() {
//     this._handleCardClick({ link: this._link, name: this._name });
//   }

//   _setListeners() {
//     //обработка лайка
//     this._buttonLike.addEventListener('click', () => this._handleLikeClick(this._id));
//     //удалить карточку
//     // this._buttonDelete.addEventListener('click', () => this._handleDeleteCard(this._id));

//     if (!this._userId) {
//       this._card.remove();
//         this._card = null;
//     } else {
//       this._buttonDelete.addEventListener('click', () => this._handleDeleteCard(this._id));
//     }
//     //открытие фото при клике на карточку
//     this._image.addEventListener('click', () => this._handleImageClick());
//   }


//   //генерация карточки
//   generateCard() {
//     this._getTemplate();
//     this._setListeners();
//     this.isLiked();
//     this._image.src = this._link;
//     this._image.alt = this._name;
//     this._content.textContent = this._name;
//     this.setLikeCountCard(this._cardLike);
//     if (this._ownerId !== this._userId) {
//       this._buttonDelete.remove();
//     }
//     return this._card;
//   }
// }

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

  // клонировать темлейт из html в DOM
  _getTemplate() {
    return document
      .querySelector(this._cardTemplateSelector)
      .content
      .querySelector('.element__card')
      .cloneNode(true);
  }

  // сгенерировать карточку, т.е. наполнить темплейт содержимым
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

    // слушатель на картинке для открытия попапа
    this._cardImageElement.addEventListener('click', () => {
      this._handleCardClick(this._cardNameData, this._cardLinkData);
    });

    // слушатель на кнопке лайк/дизлайк (сердечко)
    this._buttonLike.addEventListener('click', () => {
      this._handleLikeButton();
    });
    //слушатель удаление карточек

if(!this._isUserCard){
      this._buttonDelete.remove();
      this._buttonDelete = null;
} else {
  this._card.querySelector('.element__button-delete').addEventListener('click', (event) => {
    this._handleRemoveButton(event);
  });
}


  }

  // счетчик лайков
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

  // вернуть Id карточки
  getCardId() {
    return this._cardId;
  }

}

