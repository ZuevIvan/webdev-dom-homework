import { getComments  } from './api.js';
import { renderComments, addNewComment, removeLastElement, getDate } from './render.js';

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

// 1. комментим всю разметку в html, только корневой див
//2.отрисовыванием страницы комментариев 
// 3. поввесить обработчик на ссылку 
// 4. создаем новый модуль login и функцию в ней renderLogin
// 5. создаем логику авторизации и делаем переход на страницу комментариев 
// 6. 