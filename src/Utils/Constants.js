const maldivesbBeach = new URL ('../images/item1.jpg',import.meta.url);
const indianOcean = new URL('../images/item2.jpg',import.meta.url);
const RainForest = new URL('../images/item3.jpg',import.meta.url);
const FrenchPolynesia = new URL('../images/item4.jpg',import.meta.url);
const CoteAzur = new URL('../images/item5.jpg',import.meta.url);
const DominicanRepublic = new URL('../images/item6.jpg',import.meta.url);

export const initialCards = [
  {
    name: 'Пляж Мальдивы',
    link: maldivesbBeach
  },
  {
    name: 'Индийский Океан',
    link: indianOcean
  },
  {
    name: 'Тропический лес',
    link:  RainForest

  },
  {
    name: 'Французская Полинезия',
    link: FrenchPolynesia
  },
  {
    name: 'Лазурный берег',
    link: CoteAzur
  },
  {
    name: 'Доминиканская республика',
    link: DominicanRepublic
  }
];

export const dataBlock = {
  cardsTemplate: '.cards',
  listContentData: '.element__card',
  sceneryData: '.element__image',
  placeData: '.element__subtitle',
  likeData: '.element__button-like',
  activeLikeData: '.element__button-like_active',
  deleteData: '.element__button-delete'
}

export const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__decription',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__decription_error',
  errorClass: 'popup__error_active'
}

export const popupImage = document.querySelector('.popup_type_image');

/* попапы */
export const popups = document.querySelectorAll('.popup')
export const popupEdit = document.querySelector('.popup_type_edit');
export const popupAdd = document.querySelector('.popup_type_add');
export const buttonEdit = document.querySelector('.profile__edit-button');
export const buttonAdd = document.querySelector('.profile__add-button');

/* добавление профиля */
export const nameAvtor = document.querySelector('.profile__title');
export const postAvtor = document.querySelector('.profile__subtitle');
export const nameInput = popupEdit.querySelector('.popup__decription_type_name');
export const jobInput = popupEdit.querySelector('.popup__decription_type_job');

/* отправка форм */
export const formElementEdit = popupEdit.querySelector('.popup__form-edit');
export const formElementAdd = popupAdd.querySelector('.popup__form-add');
export const elementContainer = document.querySelector('.element') /* сюда закидываем контент */