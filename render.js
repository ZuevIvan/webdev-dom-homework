import { isAuthorized } from "./index.js";
import {addNewElToList, getComments, deleteComment} from "./api.js"


export function renderComments(user, comments) {
  const appEl = document.querySelector(".app");

  let commentsHTML = '';

  comments.forEach(comment => {
    commentsHTML += `<li id="comment" class="comment" data-index="${comment.id}">
      <div class="comment-header">
        <div class="comment-name" data-name="${comment.author.name}">${comment.author.name}</div>
        <div>${getDate(comment.date)}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text" data-text="${comment.text}">${comment.text}</div>
      </div>
      <div class="comment-footer">
        <div class="likes" data-index="${comment.id}">
          <span class="likes-counter" data-index="${comment.id}">${comment.likes}</span>
          <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${comment.id}"></button>
        </div>
      </div>
    </li>`;
  });

  appEl.innerHTML = `<div class="container">
    <ul id="comments" class="comments">${commentsHTML}</ul>
    ${isAuthorized ? 
      `<div class="add-form">
         <input id="name-input" type="text" class="add-form-name" placeholder="Введите ваше имя" />
         <textarea id="text-input" type="textarea" class="add-form-text" placeholder="Введите ваш комментарий" rows="4"></textarea>
         <div class="add-form-row">
           <button id="delete-button" class="delete-button">Удалить последний комментарий</button>
           <button id="add-button" class="add-form-button">Написать</button>
         </div>
       </div>` :
      '<a class="registrationLink" href="#">Вход или регистрация</a>'}
  </div>`;

  const usersLikes = document.querySelectorAll('.likes');
  const numberLikesEl = document.querySelectorAll('.likes-counter');
  const likesPainter = document.querySelectorAll('.like-button');

  // Обработчик лайков
  for (let userLike of usersLikes) {
    userLike.addEventListener('click', (event) => {
      event.stopPropagation();
      const indexUserLike = userLike.dataset.index;
      if (commentsServer[indexUserLike].isLiked) {
        commentsServer[indexUserLike].likes -= 1;
        commentsServer[indexUserLike].isLiked = false;
      } else {
        commentsServer[indexUserLike].likes += 1;
        commentsServer[indexUserLike].isLiked = true;
      }
      renderComments(commentsServer);
    });
  }

  // Ответ на комментарий
  const responseUsersComments = document.querySelectorAll('#comment');
  for (const responseUserComment of responseUsersComments) {
    responseUserComment.addEventListener('click', () => {
      const userName = commentsServer[responseUserComment.dataset.index].author.name;
      const userText = commentsServer[responseUserComment.dataset.index].text;
      const textInputElement = document.getElementById("text-input");
      textInputElement.value = '>' + " " + ' "' + `${userText}` + ' "' + ' ©' + '\n' + '(' + `${userName}` + ')' + '\n';
    });
  }

  if (isAuthorized) {
    const addButtonElement = document.querySelector('#add-button');
    addButtonElement.addEventListener('click', () => {
      addNewComment(user, comments);
    });

  } else {
    document.querySelector('.registrationLink').addEventListener('click', () => {
      console.log('Регистрация или Вход');
    });
  }
}

export const deleteButtonElement = document.querySelector('#delete-button');

// Удаление последнего комментария
export function removeLastElement(user, comments) {
  if (comments.length > 0) {
    const lastCommentId = comments[comments.length - 1].id;
    deleteComment(user.token, lastCommentId)
      .then(() => {
        comments.pop(); // Удаляем последний элемент из массива comments
        renderComments(user, comments); // Перерисовываем комментарии после удаления
      })
      .catch((error) => {
        alert("Кажется что-то пошло не так, попробуйте позже");
      });
  }
}

// Определение даты
function getDate(date) {
  const dateNow = new Date();
  const dateNumber = String(dateNow.getDate()).padStart(2, "0");
  const dateMonth = String(dateNow.getMonth() + 1).padStart(2, "0");
  const dateYear = dateNow.getFullYear();
  const dateHours = String(dateNow.getHours()).padStart(2, "0");
  const dateMinutes = String(dateNow.getMinutes()).padStart(2, "0");

  return (
    dateNumber +
    "." +
    dateMonth +
    "." +
    dateYear +
    " " +
    dateHours +
    ":" +
    dateMinutes
  );
}

// Добавление нового комментария
export function addNewComment(user, comments) {
  const buttonElement = document.getElementById("add-button");
  const nameInputElement = document.getElementById("name-input");
  const textInputElement = document.getElementById("text-input");
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

  const name = nameInputElement.value.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const text = textInputElement.value.replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  addNewElToList(user, name, text)
    .then(() => {
      nameInputElement.value = "";
      textInputElement.value = "";
      nameInputElement.placeholder = "Введите ваше имя";
      textInputElement.placeholder = "Введите ваш комментарий";
      return getComments(user.token);
    })
    .then((updatedComments) => {
      renderComments(user, updatedComments); // Передаем переменную user и обновленные комментарии
    })
    .catch((error) => {
      buttonElement.disabled = false;
      buttonElement.textContent = "Написать";
      alert("Кажется что-то пошло не так, попробуйте позже");
    });
}