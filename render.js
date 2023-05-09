import { getComments, addNewElToList } from './api.js';


// опрделение даты
function getDate(){
  const dateNow = new Date();
  const dateNumber = String(dateNow.getDate()).padStart(2, '0');
  const dateMonth = String(dateNow.getMonth() + 1).padStart(2, '0');
  const dateYear =dateNow.getFullYear()
  const dateHours = dateNow.getHours()
  const dateMinutes = dateNow.getMinutes()

  return dateNumber + "." + dateMonth +"."+ dateYear + " "+ dateHours +":"+dateMinutes;
}

// добавление нового коммента
function addNewComment() {

    const buttonElement = document.getElementById("add-button");
    const commentsElement = document.getElementById("comments");
    const commentElement = document.getElementById("comment");
    const nameInputElement = document.getElementById("name-input");
    const textInputElement = document.getElementById("text-input");
    let commentsServer = [];

  nameInputElement.classList.remove("error");
  textInputElement.classList.remove("error");

  if (nameInputElement.value === "") {
    nameInputElement.classList.add("error");
    return;
  }

  if (textInputElement.value === "") {
    textInputElement.classList.add("error");
    return;
  }

  const name = nameInputElement.value.replaceAll("<", "&lt;").replaceAll("<", "&lt;");
  const text = textInputElement.value.replaceAll("<", "&lt;").replaceAll("<", "&lt;");

  addNewElToList(name, text).then(() => {
    renderComments();
    nameInputElement.value = "";
    textInputElement.value = "";
    nameInputElement.placeholder = "Введите ваше имя";
    textInputElement.placeholder = "Введите ваш комментарий";
  }).catch((error) => {
        buttonElement.disabled = false;
        buttonElement.textContent = 'Написать';
        alert('Кажется что-то пошло не так, попробуй позже')
    });
}



