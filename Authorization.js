export function renderAuthorizationForm() {
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
    <button class="btn-registration" id="login-button">Зарегистрироваться</button>
  </div>
    `;
  
    const loginButton = document.querySelector('#login-button');
    loginButton.addEventListener('click', () => {
      const usernameInput = document.querySelector('#username-input');
      const passwordInput = document.querySelector('#password-input');
      const username = usernameInput.value;
      const password = passwordInput.value;
      // Здесь вы можете вызвать функцию для выполнения авторизации на сервере
      // и обновить состояние авторизации в соответствии с результатом
    });
  }