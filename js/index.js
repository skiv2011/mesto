const openButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const nameAvtor = document.querySelector('.profile__title');
const postAvtor = document.querySelector('.profile__subtitle');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__destription_type_name');
let jobInput = document.querySelector('.popup__destription_type_job');

function togglePopup() {
    if (popup.classList.contains('popup_opened')) {
        popup.classList.toggle('popup_opened');
    } else {
        popup.classList.toggle('popup_opened');
        nameInput.value = nameAvtor.textContent;
        jobInput.value = postAvtor.textContent;
    };
};

openButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();
    nameAvtor.textContent = nameInput.value;
    postAvtor.textContent = jobInput.value;
    togglePopup();
};

formElement.addEventListener('submit', formSubmitHandler);