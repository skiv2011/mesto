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
<<<<<<< HEAD
=======
  nameAvtor,
  postAvtor,
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
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
<<<<<<< HEAD
  const cardTemplates = new Card(cardTemplate, dataBlock, imageZoom).generateCard();
=======
  const cardTemplates = new Card(cardTemplate,dataBlock,imageZoom).generateCard();
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  return cardTemplates;
}
const popupZoomPhoto = new PopupWithImage(popupImage);
function imageZoom(data) {
  popupZoomPhoto.open(data.name, data.link);
}

// Функция открытия попапа добавления профиля
const handleEditProfileButtonClick = () => {
<<<<<<< HEAD
  validationProfile.resetValidation();
  editProfilePopup.open();
  const info = userInfo.getUserInfo();
  nameInput.value = info.name;
  jobInput.value = info.job;
};

// Функция открытия попапа "новое место"
const handleAddCardButtonClick = () => {
  validationCard.resetValidation();
=======
editProfilePopup.open();
nameInput.value = nameAvtor.textContent;
jobInput.value = postAvtor.textContent;
};

// Функция открытия попапа "новое место"
const handleAddCardButtonClick = () =>{
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  addCardPopup.open();
}

// Функция обработчик "отправки" формы
const handleProfileFormSubmit = (data) => {
<<<<<<< HEAD
  userInfo.setUserInfo(data)
=======
userInfo.setUserInfo(data)
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  editProfilePopup.close();
}

// функция добавления карточки
const handleCardFormSubmit = (data) => {
<<<<<<< HEAD
  const cardData = ({
    name: data.title,
    link: data.link
  });
  section.addItem(cardData);
  addCardPopup.close();
  validationCard.disableButton();
};

const editProfilePopup = new PopupWithForm(popupEdit, handleProfileFormSubmit);
const addCardPopup = new PopupWithForm(popupAdd, handleCardFormSubmit);
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
=======
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
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9
  jobSelector: '.profile__subtitle'
});

popupZoomPhoto.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();

<<<<<<< HEAD
buttonEdit.addEventListener('click', handleEditProfileButtonClick);
buttonAdd.addEventListener('click', handleAddCardButtonClick);
=======

buttonEdit.addEventListener('click', handleEditProfileButtonClick);
buttonAdd.addEventListener('click',handleAddCardButtonClick);
>>>>>>> 2cbaf3e45d5ca4482a6023ef8998c18555b68ba9

// Валидация всех форм
const validationProfile = new FormValidator(enableValidation, formElementEdit);
const validationCard = new FormValidator(enableValidation, formElementAdd);
validationProfile.enableValidation();
validationCard.enableValidation();

section.renderItems();