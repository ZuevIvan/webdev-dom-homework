

// Рендеринг комментариев
export function renderComments(commentsServer) {
  const commentsHTML = commentsServer.map((comment, index) => {
    return `<li id="comment" class="comment" data-index="${index}">
      <div class="comment-header">
        <div class="comment-name" data-name="${comment.author.name}">${comment.author.name}</div>
        <div>${getDate(comment.date)}</div>
      </div>
      <div class="comment-body">
        <div class="comment-text" data-text="${comment.text}">
          ${comment.text}
        </div>
      </div>
      <div class="comment-footer">
        <div class="likes" data-index="${index}">
          <span class="likes-counter" data-index="${index}">${comment.likes}</span>
          <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index="${index}"></button>
        </div>
      </div>
    </li>`;
  }).join("");

  const commentsEl = document.getElementById("comments");
  commentsEl.innerHTML = commentsHTML;

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
  };

  // // Ответ на комментарий

  const responseUsersComments = document.querySelectorAll('#comment');
  for (const responseUserComment of responseUsersComments) {
    responseUserComment.addEventListener('click', () => {
      const userName = commentsServer[responseUserComment.dataset.index].author.name;
      const userText = commentsServer[responseUserComment.dataset.index].text;
      const textInputElement = document.getElementById("text-input");
      textInputElement.value = '>' + "  " + ' "' + `${userText}` + ' "' + ' ©' + '\n' + '(' + `${userName}` + ')' + '\n';
    });
  }
}

import { getComments, addNewElToList } from './api.js';

export function removeLastElement(comments) {
  if (comments.length > 0) {
    comments.pop(); // удаляем последний элемент из массива comments
    renderComments(comments); // перерисовываем список комментариев
  }
}

// Определение даты
export function getDate(date){
  const dateNow = new Date();
  const dateNumber = String(dateNow.getDate()).padStart(2, '0');
  const dateMonth = String(dateNow.getMonth() + 1).padStart(2, '0');
  const dateYear = dateNow.getFullYear();
  const dateHours = dateNow.getHours();
  const dateMinutes = dateNow.getMinutes();

  return dateNumber + "." + dateMonth +"."+ dateYear + " "+ dateHours +":"+dateMinutes;
}



// Вызов функции получения комментариев при загрузке страницы
getComments().then((comments) => {
  renderComments(comments);
}).catch((error) => {
  console.log('Ошибка при получении комментариев:', error);
});

// Добавление нового комментария
export function addNewComment(comments) {
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

  addNewElToList(name, text)
  .then(() => {
    nameInputElement.value = "";
    textInputElement.value = "";
    nameInputElement.placeholder = "Введите ваше имя";
    textInputElement.placeholder = "Введите ваш комментарий";
    return getComments();
  })
  .then((updatedComments) => {
    renderComments(updatedComments);
  })
  .catch((error) => {
    buttonElement.disabled = false;
    buttonElement.textContent = "Написать";
    alert("Кажется что-то пошло не так, попробуйте позже");
  });
}






