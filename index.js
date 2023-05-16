
import { getComments, addNewElToList as apiAddNewElToList } from './api.js';
import { renderComments, addNewComment as renderAddNewComment } from './render.js';

// Вызов функции получения комментариев при загрузке страницы
getComments().then((comments) => {
  renderComments(comments);
}).catch((error) => {
  console.log('Ошибка при получении комментариев:', error);
});

// определение даты
import { getDate } from './render.js';


const buttonElement = document.getElementById("add-button");

// добавление нового комментария
buttonElement.addEventListener("click", () => {
  renderAddNewComment();
});

// удаление последнего комментария
function removeLastElement() {
  comments.pop(); // удаляем последний элемент из массива comments
  renderComments(comments); // перерисовываем список комментариев
}

// массив комментариев
let comments;

    