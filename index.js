import { getComments  } from './api.js';
import { renderComments } from './render.js';

let comments;

// Вызов функции получения комментариев при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  getComments()
    .then((commentsData) => {
      comments = commentsData;
      renderComments(comments);
    })
    .catch((error) => {
      console.log('Ошибка при получении комментариев:', error);
    });
});

// 1. комментим всю разметку в html, только корневой див
//2.отрисовыванием страницы комментариев 
// 3. поввесить обработчик на ссылку 
// 4. создаем новый модуль login и функцию в ней renderLogin
// 5. создаем логику авторизации и делаем переход на страницу комментариев 
// 6. 