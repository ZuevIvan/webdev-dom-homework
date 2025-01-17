import { login, getComments, registration } from "./api.js";
import { renderComments } from "./render.js";

export function renderAuthorizationForm() {
  const appEl = document.querySelector(".app");
  appEl.innerHTML = `
    <div class="container">
      <div class="add-form-authorization">
        <h2 class="registrationLink">Авторизация</h2>
        <div class="btn-authorization-registration">
          <input class="add-authorization placeholder" id="login-input" type="text" placeholder="Логин пользователя">
          <input class="add-authorization placeholder" id="password-input" type="password" placeholder="Пароль">
          <button class="btn-authorization" id="login-button">Войти</button>
        </div>
      </div>
      <button class="btn-registration" id="registration-button">Зарегистрироваться</button>
    </div>
  `;

  const loginButton = document.querySelector("#login-button");
  loginButton.addEventListener("click", () => {
    const loginInput = document.querySelector("#login-input");
    const passwordInput = document.querySelector("#password-input");
    if (!loginInput) {
      alert ("Введите Логин");
      return;
    }
    if (!passwordInput) {
      alert ("Введите Пароль");
      return;
    }

    login(loginInput.value, passwordInput.value)
      .then((response) => {
        return getComments(response.user.token).then((data) => {
          renderComments(response.user.token, data.comments);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const registrationButton = document.querySelector("#registration-button");
  registrationButton.addEventListener("click", () => {
    function renderRegistrationForm() {
      const appEl = document.querySelector(".app");
      appEl.innerHTML = `
        <div class="container">
          <div class="add-form-registration">
            <h2 class="registrationLink">Регистрация</h2>
            <div class="btn-authorization-registration">
              <input class="add-authorization placeholder" id="username-input" type="text" placeholder="Имя пользователя">
              <input class="add-authorization placeholder" id="login-input" type="text" placeholder="Логин">
              <input class="add-authorization placeholder" id="password-input" type="password" placeholder="Пароль">
              <button class="btn-authorization" id="registration-submit-button">Зарегистрироваться</button>
            </div>
          </div>
          <button class="btn-registration" id="authorization-button">У меня уже есть аккаунт</button>
        </div>`;
      const authorizationBtn = document.querySelector("#authorization-button");
      authorizationBtn.addEventListener("click", () => {
        renderAuthorizationForm();
      });

      const registrationBtn = document.querySelector("#registration-submit-button");
      registrationBtn.addEventListener("click", () => {
        const usernameInput = document.querySelector("#username-input");
        const userLoginInput = document.querySelector("#login-input");
        const passwordInput = document.querySelector("#password-input");
        if (!userLoginInput) {
          alert ("Введите Логин");
          return;
        }
        if (!passwordInput) {
          alert ("Введите Пароль");
          return;
        }
        if(!usernameInput){
          alert ("Введите Имя пользоввателя");
          return;
        }
        registration(userLoginInput.value, passwordInput.value, usernameInput.value)
        .then((response) => {
          return getComments(response.user.token).then((data) => {
            renderComments(response.user.token, data.comments);
          });
        })
        .catch((error) => {
          console.error(error);
        });

      } )

    }

    renderRegistrationForm();
  });
}
