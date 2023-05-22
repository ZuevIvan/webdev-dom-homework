import {login} from "./api.js"

export function renderAuthorizationForm( setToken ) {
    const appEl = document.querySelector('.app');
    appEl.innerHTML = `
    <div class="container">
    <div class="add-form-authorization">
      <h2 class="registrationLink">Авторизация</h2>
      <div class="btn-authorization-registration">
        <input class="add-authorization placeholder" id="username-input" type="text" placeholder="Имя пользователя">
        <input class="add-authorization placeholder" id="password-input" type="password" placeholder="Пароль">
        <button class="btn-authorization" id="login-button">Войти</button>
      </div>
    </div>
    <button class="btn-registration" id="registration-button">Зарегистрироваться</button>
  </div>
    `;
  
    const loginButton = document.querySelector('#login-button');
    loginButton.addEventListener('click', () => {

        setToken("Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k")

        login({
            login: ' ',
            password: ' ',
        }).then ((user) =>{
            console.log(user);
        })
    });

    const registrationButton = document.querySelector('#registration-button');
    registrationButton.addEventListener('click', () => {
      function renderRegistrationForm() {
        const appEl = document.querySelector('.app');
        appEl.innerHTML = `
          <div class="container">
            <div class="add-form-registration">
              <h2 class="registrationLink">Регистрация</h2>
              <div class="btn-authorization-registration">
                <input class="add-authorization placeholder" id="username-input" type="text" placeholder="Имя пользователя">
                <input class="add-authorization placeholder" id="password-input" type="password" placeholder="Пароль">
                <input class="add-authorization placeholder" id="password-input" type="password" placeholder="Повторите пароль">

                <button class="btn-authorization" id="login-button">Зарегистрироваться</button>
              </div>
            </div>
            <button class="btn-registration" id="registration-button">У меня уже есть аккаунт</button>
          </div>
        `;
      }
    
      renderRegistrationForm();
    });


  }