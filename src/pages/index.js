import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupConfirm from '../components/PopupConfirm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import {
  cardTemplateSelector,
  enableValidation,
  buttonEdit,
  buttonAdd,
  buttonEditAvatar,
  formElementEdit,
  formElementAdd,
  formElementAvatar,
  nameInput,
  jobInput,
  elementContainer,
  popupImage,
  popupAdd,
  popupEdit,
  popupAvatar,
  popupDeleteCard
} from '../Utils/Constants.js';

api.getDataFromServer().then((responses) => {
  const [initialCards, userData] = responses;
  userInfo.setUserInfo({ name: userData.name, job: userData.about, avatar: userData.avatar, userId: userData._id });
  renderCards.renderItems(initialCards);
}).catch((err) => {
  console.error(err);
});

const renderCards = new Section(
  elementContainer,
  {
    renderer: (cardData) => {
      const newCard = new Card({
        cardData: cardData,
        cardTemplateSelector: cardTemplateSelector,
        userId: userInfo.getUserId(),
        handleCardClick: (name, link) => {
          popupZoomPhoto.open(name, link);
        },
        handleLikeButton: () => {
          if (newCard.isLiked) {
            api.deleteLike(newCard.getCardId()).then((cardData) => {
              newCard.unsetLike();
              newCard.updatelikesCounter(cardData.likes);
            }).catch((err) => {
              console.error(err);
            });
          } else {
            api.addLike(newCard.getCardId()).then((cardData) => {
              newCard.setLike();
              newCard.updatelikesCounter(cardData.likes);
            }).catch((err) => {
              console.error(err);
            });
          }
        },
        handleRemoveButton: (event) => {
          const cardElement = event.target.closest('.element__card');
          const cardId = newCard.getCardId();
          confirmPopup.open();
          confirmPopup.updateSubmitHandler(() => {
            api.deleteCard(cardId).then(() => {
              cardElement.remove();
              confirmPopup.close();
            }).catch((err) => {
              console.error(err);
            });
          });
        }
      });
      return newCard.generateCard();
    }
  });

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar-img'
});

function openEditAvatar() {
  validationAvatar.resetValidation();
  editAvatarPopup.open();
}

const editAvatarPopup = new PopupWithForm(popupAvatar, (inputValues) => {
  editAvatarPopup.renderLoading(true);
  api.editAvatar(inputValues.avatar)
    .then(res => {
      userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar })
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    }).finally(() => {
      editAvatarPopup.renderLoading(false);
    });
});
editAvatarPopup.setEventListeners();

buttonEditAvatar.addEventListener('click', openEditAvatar);

const validationAvatar = new FormValidator(enableValidation, formElementAvatar);
validationAvatar.enableValidation();

// Функция обработчик "отправки" формы
const handleProfileFormSubmit = (data) => {
  editProfilePopup.renderLoading(true);
  api.editProfile(data)
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, job: res.about, avatar: res.avatar });
      editProfilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    }).finally(() => {
      editProfilePopup.renderLoading(false);
    });
}

// Функция открытия попапа добавления профиля
const handleEditProfileButtonClick = () => {
  validationProfile.resetValidation();
  editProfilePopup.open();
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;
};
buttonEdit.addEventListener('click', handleEditProfileButtonClick);
const editProfilePopup = new PopupWithForm(popupEdit, handleProfileFormSubmit);
const validationProfile = new FormValidator(enableValidation, formElementEdit);

validationProfile.enableValidation();
editProfilePopup.setEventListeners();

// функция добавления карточки
const handleCardFormSubmit = (formData) => {
  addCardPopup.renderLoading(true);
  api.addCards(formData)
    .then((formData) => {
      renderCards.addItem(formData);
      addCardPopup.close();
      validationCard.disableButton();
    })
    .catch((err) => {
      console.log(err);
    }).finally(() => {
      addCardPopup.renderLoading(false);
    });
};
const addCardPopup = new PopupWithForm(popupAdd, handleCardFormSubmit);
const validationCard = new FormValidator(enableValidation, formElementAdd);

// Функция открытия попапа "новое место"
const handleAddCardButtonClick = () => {
  validationCard.resetValidation();
  addCardPopup.open();
}
buttonAdd.addEventListener('click', handleAddCardButtonClick);

validationCard.enableValidation();
addCardPopup.setEventListeners();

const popupZoomPhoto = new PopupWithImage(popupImage);
popupZoomPhoto.setEventListeners();

const confirmPopup = new PopupConfirm(popupDeleteCard)
confirmPopup.setEventListeners();