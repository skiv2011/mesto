const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
/* попапы */
const popups = document.querySelectorAll('.popup')
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');
/* закрытие попапов */
const closeButtonEdit = popupEdit.querySelector('.popup__close-button');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button');
const closeButtonImg = popupImg.querySelector('.popup__close-button');
/* добавление профиля */
const nameAvtor = document.querySelector('.profile__title');
const postAvtor = document.querySelector('.profile__subtitle');
const nameInput = popupEdit.querySelector('.popup__decription_type_name');
const jobInput = popupEdit.querySelector('.popup__decription_type_job');
const popupPhoto = document.querySelector('.popup__photo');
const popupImageTitle = document.querySelector('.popup__image-title')
const inputTitle = popupAdd.querySelector('.popup__decription_type_title'); /* имя карточки */
const inputLink = popupAdd.querySelector('.popup__decription_type_link'); /* ссылка на картинку */
/* отправка форм */
const formElementEdit = popupEdit.querySelector('.popup__form-edit');
const formElementAdd = popupAdd.querySelector('.popup__form-add');
const cardsTemplate = document.querySelector('.cards').content;/* получаем содержимое template */
const elementContainer = document.querySelector('.element') /* сюда закидываем контент */


function createCard(cardData) {
  const elementItem = cardsTemplate.cloneNode(true);
  const elementTitle = elementItem.querySelector('.element__subtitle');
  const elementLink = elementItem.querySelector('.element__image');
  const elementImage = elementItem.querySelector('.element__image');
  elementLink.src = cardData.link;
  elementImage.alt = cardData.name;
  elementTitle.textContent = cardData.name;
  elementItem.querySelector('.element__button-like').addEventListener('click', likeButton);/*слушатель кнопки "лайк" */
  elementItem.querySelector('.element__button-delete').addEventListener('click', deleteButton);/*слушатель кнопки "удалить" */
  elementImage.addEventListener('click', function (evt) { /*функция увеличения картинки(zoom)*/
    popupPhoto.src = evt.target.src;
    popupPhoto.alt = evt.target.alt;
    popupImageTitle.textContent = elementTitle.textContent;
    openPopup(popupImg);
  });
  return elementItem;
};

function renderList(data) {
  data.forEach(function (item) {
    const newCard = createCard(item);
    renderCard(newCard);
  });
};

function likeButton(evt) {
  const likeButton = evt.target;
  likeButton.classList.toggle('element__button-like_active'); /* функция кнопки лайк */
};

function deleteButton(evt) {
  const deleteButton = evt.target.closest('.element__card'); /* функция кнопки удалить карточку */
  deleteButton.remove();
};

function renderCard(elementItem) {
  elementContainer.prepend(elementItem);
};

renderList(initialCards);

/* Функция открытия попапа добавления профиля */
function openEditPopup() {
  nameInput.value = nameAvtor.textContent;
  jobInput.value = postAvtor.textContent;
  openPopup(popupEdit);
};

/* Функция открытия попапа добавления карточки */
function openAddPopup() {
  inputTitle.value;
  inputLink.value;
  openPopup(popupAdd);
};

/* Функция обработчик "отправки" формы */
function formSubmitHandler(evt) {
  evt.preventDefault();                    /* строка отменяет стандартную отправку формы */
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  closePopup(popupEdit);
};

/* Закрытие попапа нажатием "esc" */
function pressEscapeHandler(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

/* Закрыть любой попап */
function closePopup(popup) {
  document.removeEventListener('keydown', pressEscapeHandler);
  popup.classList.remove('popup_opened');
}
/* Открыть любой попап */
function openPopup(popup) {
  document.addEventListener('keydown', pressEscapeHandler);
  popup.classList.add('popup_opened');
}

/* закрытие попапа по кнопке перекрестие или клику вне попапа */
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close-button') || evt.target === evt.currentTarget) {
      closePopup(popup);
    }
  })
});

/* функция добавления карточки */
function formSubmitCard(evt) {
  evt.preventDefault();
  const cardData = { name: inputTitle.value, link: inputLink.value };
  const newCard = createCard(cardData);
  evt.target.reset();
  renderCard(newCard);
  closePopup(popupAdd);
};

buttonAdd.addEventListener('click', openAddPopup);        /* слушатель открытия попап карточки*/
buttonEdit.addEventListener('click', openEditPopup);      /*слушатель открытия попап профиля*/
closeButtonEdit.addEventListener('click', () => { closePopup(popupEdit) });      /* слушатель кнопки закрытия попап добавления профиля*/
closeButtonAdd.addEventListener('click', () => { closePopup(popupAdd) });        /* слушатель кнопки закрытия попап добавления карточки*/
closeButtonImg.addEventListener('click', () => { closePopup(popupImg) });        /* слушатель кнопки закрытия попап увеличения картинки*/
formElementEdit.addEventListener('submit', formSubmitHandler);                   /* слушатель кнопки "сохранить" формы профиля*/
formElementAdd.addEventListener('submit', formSubmitCard);                       /*слушатель кнопки "создать" формы карточки*/