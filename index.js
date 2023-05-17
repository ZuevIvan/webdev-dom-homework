import { getComments, addNewElToList } from './api.js';
import { renderComments, addNewComment, removeLastElement } from './render.js';

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
const deleteButtonElement = document.querySelector('.delete-button');

// Добавление нового комментария
addButtonElement.addEventListener('click', () => {
  addNewComment(comments);
});

// Удаление последнего комментария
deleteButtonElement.addEventListener('click', () => {
  removeLastElement(comments);
});
    