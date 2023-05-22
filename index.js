import { getComments,  } from "./api.js";
import { renderComments } from "./render.js";


let comments = [];

const user = {
  name: "admin",
  password: "admin",
  // token: "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k",
  token: null,
  login: "admin",
};

export const isAuthorized = user.token ? true : false;

getComments(user.token)
  .then((data) => {
    comments = data;
    renderComments(user, comments.comments);
  })
  .catch(() => {
    // console.log('что-то не то')
  });


// Вызов функции получения комментариев при загрузке страницы\


// 1. комментим всю разметку в html, только корневой див
// 2. отрисовыванием страницы комментариев
// 3. поввесить обработчик на ссылку
// 4. создаем новый модуль login и функцию в ней renderLogin
// 5. создаем логику авторизации и делаем переход на страницу комментариев
// 6.
