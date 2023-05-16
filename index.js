import { getComments, addNewElToList } from './api.js';
import { renderComments, addNewComment } from './render.js';

let comments;

// Вызов функции получения комментариев при загрузке страницы
getComments()
  .then((commentsData) => {
    comments = commentsData;
    renderComments(comments);
  })
  .catch((error) => {
    console.log('Ошибка при получении комментариев:', error);
  });

const addButtonElement = document.getElementById('add-button');

// Добавление нового комментария
addButtonElement.addEventListener('click', () => {
  addNewComment(comments);
});

// Удаление последнего комментария
function removeLastElement() {
  comments.pop(); // удаляем последний элемент из массива comments
  renderComments(comments); // перерисовываем список комментариев
}

    