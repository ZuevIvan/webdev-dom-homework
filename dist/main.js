/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Authorization.js":
/*!**************************!*\
  !*** ./Authorization.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAuthorizationForm: () => (/* binding */ renderAuthorizationForm)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\n\n\nfunction renderAuthorizationForm() {\n  const appEl = document.querySelector(\".app\");\n  appEl.innerHTML = `\n    <div class=\"container\">\n      <div class=\"add-form-authorization\">\n        <h2 class=\"registrationLink\">Авторизация</h2>\n        <div class=\"btn-authorization-registration\">\n          <input class=\"add-authorization placeholder\" id=\"login-input\" type=\"text\" placeholder=\"Логин пользователя\">\n          <input class=\"add-authorization placeholder\" id=\"password-input\" type=\"password\" placeholder=\"Пароль\">\n          <button class=\"btn-authorization\" id=\"login-button\">Войти</button>\n        </div>\n      </div>\n      <button class=\"btn-registration\" id=\"registration-button\">Зарегистрироваться</button>\n    </div>\n  `;\n\n  const loginButton = document.querySelector(\"#login-button\");\n  loginButton.addEventListener(\"click\", () => {\n    const loginInput = document.querySelector(\"#login-input\");\n    const passwordInput = document.querySelector(\"#password-input\");\n    if (!loginInput) {\n      alert (\"Введите Логин\");\n      return;\n    }\n    if (!passwordInput) {\n      alert (\"Введите Пароль\");\n      return;\n    }\n\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.login)(loginInput.value, passwordInput.value)\n      .then((response) => {\n        return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(response.user.token).then((data) => {\n          (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)(response.user.token, data.comments);\n        });\n      })\n      .catch((error) => {\n        console.error(error);\n      });\n  });\n\n  const registrationButton = document.querySelector(\"#registration-button\");\n  registrationButton.addEventListener(\"click\", () => {\n    function renderRegistrationForm() {\n      const appEl = document.querySelector(\".app\");\n      appEl.innerHTML = `\n        <div class=\"container\">\n          <div class=\"add-form-registration\">\n            <h2 class=\"registrationLink\">Регистрация</h2>\n            <div class=\"btn-authorization-registration\">\n              <input class=\"add-authorization placeholder\" id=\"username-input\" type=\"text\" placeholder=\"Имя пользователя\">\n              <input class=\"add-authorization placeholder\" id=\"login-input\" type=\"text\" placeholder=\"Логин\">\n              <input class=\"add-authorization placeholder\" id=\"password-input\" type=\"password\" placeholder=\"Пароль\">\n              <button class=\"btn-authorization\" id=\"registration-submit-button\">Зарегистрироваться</button>\n            </div>\n          </div>\n          <button class=\"btn-registration\" id=\"authorization-button\">У меня уже есть аккаунт</button>\n        </div>`;\n      const authorizationBtn = document.querySelector(\"#authorization-button\");\n      authorizationBtn.addEventListener(\"click\", () => {\n        renderAuthorizationForm();\n      });\n\n      const registrationBtn = document.querySelector(\"#registration-submit-button\");\n      registrationBtn.addEventListener(\"click\", () => {\n        const usernameInput = document.querySelector(\"#username-input\");\n        const userLoginInput = document.querySelector(\"#login-input\");\n        const passwordInput = document.querySelector(\"#password-input\");\n        if (!userLoginInput) {\n          alert (\"Введите Логин\");\n          return;\n        }\n        if (!passwordInput) {\n          alert (\"Введите Пароль\");\n          return;\n        }\n        if(!usernameInput){\n          alert (\"Введите Имя пользоввателя\");\n          return;\n        }\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registration)(userLoginInput.value, passwordInput.value, usernameInput.value)\n        .then((response) => {\n          return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(response.user.token).then((data) => {\n            (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)(response.user.token, data.comments);\n          });\n        })\n        .catch((error) => {\n          console.error(error);\n        });\n\n      } )\n\n    }\n\n    renderRegistrationForm();\n  });\n}\n\n\n//# sourceURL=webpack://webdev-dom-homework-/./Authorization.js?");

/***/ }),

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewElToList: () => (/* binding */ addNewElToList),\n/* harmony export */   deleteComment: () => (/* binding */ deleteComment),\n/* harmony export */   getComments: () => (/* binding */ getComments),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   registration: () => (/* binding */ registration)\n/* harmony export */ });\nconst host = \"https://webdev-hw-api.vercel.app/api/v2/ivan-zuev/comments\";\n\nfunction getComments(token) {\n  return fetch(host, {\n    method: \"GET\",\n    headers: {\n      Authorization: token ? 'Bearer '+ token: undefined, \n    },\n  }).then((response) => response.json());\n}\n\nfunction addNewElToList(token, name, text) {\n  const fetchPromise = fetch(host, {\n    method: \"POST\",\n    body: JSON.stringify({\n      name,\n      text,\n    }),\n    headers: {\n      Authorization: token ? 'Bearer '+ token: undefined, \n    },\n  });\n\n  return fetchPromise.then((response) => {\n    if (response.status === 500) {\n      return Promise.reject(\"Сервер упал\");\n    } else if (response.status === 400) {\n      return Promise.reject(\"Объект с ошибкой в формате\");\n    } else {\n      return response.json();\n    }\n  }).catch((error) => {\n    return Promise.reject(error);\n  });\n}\n\nfunction deleteComment(token, commentId) {\n  return fetch(`${host}/${commentId}`, {\n    method: \"DELETE\",\n    headers: {\n      Authorization: token ? 'Bearer '+ token: undefined, \n    },\n  }).then((response) => {\n    if (response.ok) {\n      return response.json();\n    } else {\n      return Promise.reject(\"Не удалось удалить комментарий\");\n    }\n  });\n}\n\nfunction login(login, password) {\n  return fetch('https://webdev-hw-api.vercel.app/api/user/login', {\n    method: \"POST\",\n    body: JSON.stringify({\n      login,\n      password,\n    }),\n  })\n  .then((response) => {\n    if (response.status === 400 ){\n      throw new error (\"Неверный логин или пароль\")\n    }\n    return response.json();\n  });\n}\n\nfunction registration(login, password, name) {\n  return fetch('https://webdev-hw-api.vercel.app/api/user', {\n    method: \"POST\",\n    body: JSON.stringify({\n      login,\n      password,\n      name,\n    }),\n  })\n  .then((response) => {\n    if (response.status === 400 ){\n      throw new Error (\"Такой пользователь уже существует\")\n    }\n    return response.json();\n  });\n}\n\n\n//# sourceURL=webpack://webdev-dom-homework-/./api.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   token: () => (/* binding */ token)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\n\n\nlet comments = [];\nlet token;\n\nconst user = {\n  name: \"admin\",\n  password: \"admin\",\n  // token: \"Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k\",\n  token: null,\n  login: \"admin\",\n};\n\n(0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)()\n  .then((data) => {\n    comments = data;\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_1__.renderComments)(user.token, comments.comments, true);\n  })\n  .catch(() => {\n    // console.log('что-то не то')\n  });\n\n\n// Вызов функции получения комментариев при загрузке страницы\\\n\n\n// 1. комментим всю разметку в html, только корневой див\n// 2. отрисовыванием страницы комментариев\n// 3. поввесить обработчик на ссылку\n// 4. создаем новый модуль login и функцию в ней renderLogin\n// 5. создаем логику авторизации и делаем переход на страницу комментариев\n// 6.\n\n\n//# sourceURL=webpack://webdev-dom-homework-/./index.js?");

/***/ }),

/***/ "./lib/formatDate/formatDate.js":
/*!**************************************!*\
  !*** ./lib/formatDate/formatDate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDateToRu: () => (/* binding */ formatDateToRu),\n/* harmony export */   formatDateToUs: () => (/* binding */ formatDateToUs)\n/* harmony export */ });\nfunction formatDateToRu(date) {\n    const dateNow = new Date(date);\n    const dateNumber = String(dateNow.getDate()).padStart(2, \"0\");\n    const dateMonth = String(dateNow.getMonth() + 1).padStart(2, \"0\");\n    const dateYear = dateNow.getFullYear();\n    const dateHours = String(dateNow.getHours()).padStart(2, \"0\");\n    const dateMinutes = String(dateNow.getMinutes()).padStart(2, \"0\");\n  \n    return (\n      dateNumber +\n      \"/\" +\n      dateMonth +\n      \"/\" +\n      dateYear +\n      \" \" +\n      dateHours +\n      \":\" +\n      dateMinutes\n    );\n  }\n  \n  function formatDateToUs(date) {\n    const dateNow = new Date(date);\n    const dateNumber = String(dateNow.getDate()).padStart(2, \"0\");\n    const dateMonth = String(dateNow.getMonth() + 1).padStart(2, \"0\");\n    const dateYear = dateNow.getFullYear();\n    const dateHours = String(dateNow.getHours()).padStart(2, \"0\");\n    const dateMinutes = String(dateNow.getMinutes()).padStart(2, \"0\");\n  \n    return (\n      dateMonth +\n      \"-\" +\n      dateNumber +\n      \"-\" +\n      dateYear +\n      \" \" +\n      dateHours +\n      \":\" +\n      dateMinutes\n    );\n  }\n\n//# sourceURL=webpack://webdev-dom-homework-/./lib/formatDate/formatDate.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewComment: () => (/* binding */ addNewComment),\n/* harmony export */   renderComments: () => (/* binding */ renderComments)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _Authorization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Authorization.js */ \"./Authorization.js\");\n/* harmony import */ var _lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/formatDate/formatDate.js */ \"./lib/formatDate/formatDate.js\");\n\n\n\n\n\nfunction renderComments(token, comments) {\n  const appEl = document.querySelector(\".app\");\n\n  let commentsHTML = \"\";\n\n  comments.forEach((comment) => {\n    commentsHTML += `<li id=\"comment\" class=\"comment\" data-index=\"${\n      comment.id\n    }\">\n      <div class=\"comment-header\">\n        <div class=\"comment-name\" data-name=\"${comment.author.name}\">${\n      comment.author.name\n    }</div>\n        <div>${getDate(comment.date)}</div>\n      </div>\n      <div class=\"comment-body\">\n        <div class=\"comment-text\" data-text=\"${comment.text}\">${\n      comment.text\n    }</div>\n      </div>\n      <div class=\"comment-footer\">\n        <div class=\"likes\" data-index=\"${comment.id}\">\n          <span class=\"likes-counter\" data-index=\"${comment.id}\">${\n      comment.likes\n    }</span>\n          <button class=\"like-button ${\n            comment.isLiked ? \"-active-like\" : \"\"\n          }\" data-index=\"${comment.id}\"></button>\n        </div>\n      </div>\n    </li>`;\n  });\n\n  appEl.innerHTML = `<div class=\"container\">\n    <ul id=\"comments\" class=\"comments\">${commentsHTML}</ul>\n    ${\n      token\n        ? `<div class=\"add-form\">\n         <input id=\"name-input\" type=\"text\" class=\"add-form-name\" placeholder=\"Введите ваше имя\" />\n         <textarea id=\"text-input\" type=\"textarea\" class=\"add-form-text\" placeholder=\"Введите ваш комментарий\" rows=\"4\"></textarea>\n         <div class=\"add-form-row\">\n           <button id=\"add-button\" class=\"add-form-button\">Написать</button>\n         </div>\n       </div>`\n        : '<a class=\"registrationLink\" href=\"#\">Вход или регистрация</a>'\n    }\n  </div>`;\n\n  const deleteButtonElement = document.querySelector(\"#delete-button\");\n  const usersLikes = document.querySelectorAll(\".likes\");\n  const numberLikesEl = document.querySelectorAll(\".likes-counter\");\n  const likesPainter = document.querySelectorAll(\".like-button\");\n\n  // Обработчик лайков\n  for (let userLike of usersLikes) {\n    userLike.addEventListener(\"click\", (event) => {\n      event.stopPropagation();\n      const indexUserLike = userLike.dataset.index;\n      if (comments[indexUserLike]) {\n      if (comments[indexUserLike].isLiked) {\n        comments[indexUserLike].likes -= 1;\n        comments[indexUserLike].isLiked = false;\n      } else {\n        comments[indexUserLike].likes += 1;\n        comments[indexUserLike].isLiked = true;\n      }\n      renderComments(token, comments);\n    }\n    });\n  }\n// Ответ на комментарий\nconst responseUsersComments = document.querySelectorAll(\"#comment\");\nfor (const responseUserComment of responseUsersComments) {\n  responseUserComment.addEventListener(\"click\", () => {\n    const commentId = responseUserComment.dataset.index;\n\n    const comment = comments.find((item) => item.id === commentId);\n    if (comment) {\n      const userName = comment.author.name;\n      const userText = comment.text;\n      const textInputElement = document.getElementById(\"text-input\");\n      textInputElement.value =\n        \">\" +\n        \" \" +\n        ' \"' +\n        `${userText}` +\n        ' \"' +\n        \" ©\" +\n        \"\\n\" +\n        \"(\" +\n        `${userName}` +\n        \")\" +\n        \"\\n\";\n    } else {\n      console.log(`Комментарий с id ${commentId} не найден.`);\n    }\n  });\n}\n\n  if (token) {\n    const addButtonElement = document.querySelector(\"#add-button\");\n    addButtonElement.addEventListener(\"click\", () => {\n      addNewComment(token, comments);\n    });\n\n    // Удаление последнего комментария\n    // deleteButtonElement.addEventListener(\"click\", () => {\n    //   removeLastElement(token, comments);\n    // });\n  } else {\n    document\n      .querySelector(\".registrationLink\")\n      .addEventListener(\"click\", () => {\n        (0,_Authorization_js__WEBPACK_IMPORTED_MODULE_1__.renderAuthorizationForm)(token);\n      });\n  }\n}\n\n// Удаление последнего комментария\n// export function removeLastElement(user, comments) {\n//   if (comments.length > 0) {\n//     const lastCommentId = comments[comments.length - 1].id;\n//     deleteComment(user.token, lastCommentId)\n//       .then(() => {\n//         comments.pop(); // Удаляем последний элемент из массива comments\n//         renderComments(user.token, comments); // Перерисовываем комментарии после удаления\n//       })\n//       .catch((error) => {\n//         alert(\"Кажется что-то пошло не так, попробуйте позже\");\n//       });\n//   }\n// }\n\n// Определение даты\nconst country = 'ru';\nconst date = new Date();\n\nlet formattedDate;\nif (country === 'ru') {\n  formattedDate = (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToRu)(date);\n} else if (country === 'us') {\n  formattedDate = (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToUs)(date);\n}\n\nconsole.log(formattedDate);\n\n// Добавление нового комментария\nfunction addNewComment(user) {\n  const buttonElement = document.getElementById(\"add-button\");\n  const nameInputElement = document.getElementById(\"name-input\");\n  const textInputElement = document.getElementById(\"text-input\");\n  nameInputElement.classList.remove(\"error\");\n  textInputElement.classList.remove(\"error\");\n\n  if (nameInputElement.value === \"\") {\n    nameInputElement.classList.add(\"error\");\n    return;\n  }\n\n  if (textInputElement.value === \"\") {\n    textInputElement.classList.add(\"error\");\n    return;\n  }\n\n  const name = nameInputElement.value\n    .replaceAll(\"<\", \"&lt;\")\n    .replaceAll(\">\", \"&gt;\");\n  const text = textInputElement.value\n    .replaceAll(\"<\", \"&lt;\")\n    .replaceAll(\">\", \"&gt;\");\n\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addNewElToList)(user, name, text)\n    .then(() => {\n      nameInputElement.value = \"\";\n      textInputElement.value = \"\";\n      nameInputElement.placeholder = \"Введите ваше имя\";\n      textInputElement.placeholder = \"Введите ваш комментарий\";\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(user.token);\n    })\n    .then((updatedComments) => {\n      renderComments(user, updatedComments.comments); // Передаем переменную user и обновленные комментарии\n    })\n    .catch((error) => {\n      buttonElement.disabled = false;\n      buttonElement.textContent = \"Написать\";\n      console.error(error);\n    });\n}\n\n\n//# sourceURL=webpack://webdev-dom-homework-/./render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;