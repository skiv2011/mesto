const initialCards = [
  {
    name: 'Пляж Мальдивы',
    link: 'images/item1.jpg',
  },
  {
    name: 'Индийский Океан',
    link: 'images/item2.jpg'
  },
  {
    name: 'Тропический лес',
    link: 'images/item3.jpg'
  },
  {
    name: 'Французская Полинезия',
    link: 'images/item4.jpg'
  },
  {
    name: 'Лазурный берег',
    link: 'images/item5.jpg'
  },
  {
    name: 'Доминиканская республика',
    link: 'images/item6.jpg'
  }
];

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
/*попапы*/
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');
/*закрытие попапов*/
const closeButtonEdit = popupEdit.querySelector('.popup__close-button');
const closeButtonAdd = popupAdd.querySelector('.popup__close-button');
const closeButtonImg = popupImg.querySelector('.popup__close-button');
/*добавление профиля*/
const nameAvtor = document.querySelector('.profile__title');
const postAvtor = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__decription_type_name');
const jobInput = document.querySelector('.popup__decription_type_job');
const popupPhoto = document.querySelector('.popup__photo');
const popupImageTitle = document.querySelector('.popup__image-title')
const elementTitle = popupAdd.querySelector('.popup__decription_type_title'); /*имя карточки*/
const elementLink = popupAdd.querySelector('.popup__decription_type_link'); /*ссылка на картинку*/
/*отправка форм*/
const formElementEdit = popupEdit.querySelector('.popup__form-edit');
const formElementAdd = popupAdd.querySelector('.popup__form-add');
const cardsTemplate = document.querySelector('.cards').content;/*получаем содержимое template*/
const elementContainer = document.querySelector('.element') /*сюда закидываем контент*/

function createCard(name, link) {
  const elementItem = cardsTemplate.cloneNode(true);
  const elementTitle = elementItem.querySelector('.element__subtitle');
  const elementLink = elementItem.querySelector('.element__image');
  const elementImage = elementItem.querySelector('.element__image');
  elementLink.src = link;
  elementImage.alt = name;
  elementTitle.textContent = name;
  elementItem.querySelector('.element__button-like').addEventListener('click', likeBotton);/*слушатель кнопки "лайк" */
  elementItem.querySelector('.element__button-delete').addEventListener('click', deleteBotton);/*слушатель кнопки "удалить" */
  elementImage.addEventListener('click', function (evt) { /*функция увеличения картинки(zoom)*/
    openPopup(popupImg);
    popupPhoto.src = evt.target.src;
    popupImageTitle.textContent = elementTitle.textContent;
  });
  return elementItem;
};

function renderList(data) {
  data.forEach(function (item) {
    const newCard = createCard(item.name, item.link);
    renderCard(newCard);
  });
};

function likeBotton(evt) {
  const likeBotton = evt.target;
  likeBotton.classList.toggle('element__botton-like_active'); /*функция кнопки лайк*/
};

function deleteBotton(evt) {
  const deleteBotton = evt.target.closest('.element__card');/*функция кнопки удалить карточку*/
  deleteBotton.remove();
};

function renderCard(elementItem) {
  elementContainer.prepend(elementItem);
};

renderList(initialCards);

/* Функция открытия попапа */
function openPopup(popup) {
  popup.classList.add('popup_opened')
};

/* Функция закрывающая попап */
function closePopup(popup) {
  popup.classList.remove('popup_opened')
};

/*Функция открытия попапа добавления профиля*/
function openEditPopup() {
  nameInput.value = nameAvtor.textContent;
  jobInput.value = postAvtor.textContent;
  openPopup(popupEdit);
};

/*Функция открытия попапа добавления карточки*/
function openAddPopup() {
  elementTitle.value = "";
  elementLink.value = "";
  openPopup(popupAdd);
};

/* Функция обработчик "отправки" формы */
function formSubmitHandler(evt) {
  evt.preventDefault();                    /*строка отменяет стандартную отправку формы*/
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  closePopup(popupEdit);
};


/*функция добавления карточки*/
function formSubmitCard(evt) {
  evt.preventDefault();
  const newCard = createCard(elementTitle.value, elementLink.value);
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