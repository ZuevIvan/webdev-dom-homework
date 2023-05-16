
import { getComments, addNewElToList as apiAddNewElToList } from './api.js';
import { renderComments, addNewComment as renderAddNewComment } from './render.js';

getComments()
  .then((comments) => {
    renderComments(comments);
  })
  .catch((error) => {
    console.log('Ошибка при получении комментариев:', error);
  });

//   document.getElementById("add-button").addEventListener("click", () => {
//   addNewComment();
// });

