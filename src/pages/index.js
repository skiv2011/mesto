import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';

import {
  initialCards,
  dataBlock,
  enableValidation,
  buttonEdit,
  buttonAdd,
  formElementEdit,
  formElementAdd,
  nameAvtor,
  postAvtor,
  nameInput,
  jobInput,
  elementContainer,
  popupImage,
  popupAdd,
  popupEdit,
} from '../Utils/Constants.js';

const section = new Section(
  {
    items: initialCards,
    renderer: (items, isPrepend = true) => {
      const newCard = createCard(items);
      if (isPrepend) {
        elementContainer.prepend(newCard);
      } else {
        elementContainer.append(newCard);
      }
    }
  },
  elementContainer
);

//Добавление карточек
function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate,dataBlock,imageZoom).generateCard();
  return cardTemplates;
}
const popupZoomPhoto = new PopupWithImage(popupImage);
function imageZoom(data) {
  popupZoomPhoto.open(data.name, data.link);
}

// Функция открытия попапа добавления профиля
const handleEditProfileButtonClick = () => {
  validationProfile.resetValidation();
editProfilePopup.open();
const info = userInfo.getUserInfo();
nameInput.value = info.name;
jobInput.value = info.job;
};

// Функция открытия попапа "новое место"
const handleAddCardButtonClick = () =>{
  validationCard.resetValidation();
  addCardPopup.open();
}

// Функция обработчик "отправки" формы
const handleProfileFormSubmit = (data) => {
userInfo.setUserInfo(data)
  editProfilePopup.close();
}

// функция добавления карточки
const handleCardFormSubmit = (data) => {
const cardData = ({
  name: data.title,
  link: data.link});
section.addItem(cardData);
addCardPopup.close();
validationCard.disableButton();
};

const editProfilePopup = new PopupWithForm(popupEdit,handleProfileFormSubmit);
const addCardPopup = new PopupWithForm(popupAdd,handleCardFormSubmit);
const userInfo = new UserInfo({
  nameSelector:'.profile__title',
  jobSelector: '.profile__subtitle'
});

popupZoomPhoto.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();

buttonEdit.addEventListener('click', handleEditProfileButtonClick);
buttonAdd.addEventListener('click',handleAddCardButtonClick);

// Валидация всех форм
const validationProfile = new FormValidator(enableValidation, formElementEdit);
const validationCard = new FormValidator(enableValidation, formElementAdd);
validationProfile.enableValidation();
validationCard.enableValidation();

section.renderItems();