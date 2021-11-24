import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-msg'

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {
    const formDataStringified = JSON.stringify({ email: form.email.value, message: form.message.value });
    localStorage.setItem(STORAGE_KEY, message)
}

function populateTextarea() {
    if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
    form.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
    form.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message;
  }
}
