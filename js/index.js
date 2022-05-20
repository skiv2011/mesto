const openButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const nameAvtor = document.querySelector('.profile__title');
const postAvtor = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__decription_type_name');
let jobInput = document.querySelector('.popup__decription_type_job');

/* Функция открытия попапа */
function togglePopup() {
    popup.classList.toggle('popup_opened');
    if (popup.classList.contains('popup_opened')) {
        nameInput.value = nameAvtor.textContent;
        jobInput.value = postAvtor.textContent;
    }
};

/* Функция закрывающая попап */
function closePopup() {
    popup.classList.remove('popup_opened')
};

/* Функция обработчик "отправки" формы */
function formSubmitHandler(evt) {
    evt.preventDefault(); /*строка отменяет стандартную отправку формы*/
    nameAvtor.textContent = nameInput.value;
    postAvtor.textContent = jobInput.value;
    togglePopup();
};

openButton.addEventListener('click', togglePopup); /* слушатель кнопки открытия попап */
closeButton.addEventListener('click', togglePopup); /* слушатель кнопки закрытия попап */
formElement.addEventListener('submit', formSubmitHandler); /* слушатель кнопки "отправки" формы */