const host = "https://webdev-hw-api.vercel.app/api/v2/ivan-zuev/comments";

export function getComments(token) {
  return fetch(host, {
    method: "GET",
    headers: {
      Authorization: token ? 'Bearer '+ token: undefined, 
    },
  }).then((response) => response.json());
}

export function addNewElToList(token, name, text) {
  const fetchPromise = fetch(host, {
    method: "POST",
    body: JSON.stringify({
      name,
      text,
    }),
    headers: {
      Authorization: token ? 'Bearer '+ token: undefined, 
    },
  });

  return fetchPromise.then((response) => {
    if (response.status === 500) {
      return Promise.reject("Сервер упал");
    } else if (response.status === 400) {
      return Promise.reject("Объект с ошибкой в формате");
    } else {
      return response.json();
    }
  }).catch((error) => {
    return Promise.reject(error);
  });
}

export function deleteComment(token, commentId) {
  return fetch(`${host}/${commentId}`, {
    method: "DELETE",
    headers: {
      Authorization: token ? 'Bearer '+ token: undefined, 
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("Не удалось удалить комментарий");
    }
  });
}

export function login(login, password) {
  return fetch('https://webdev-hw-api.vercel.app/api/user/login', {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  })
  .then((response) => {
    if (response.status === 400 ){
      throw new error ("Неверный логин или пароль")
    }
    return response.json();
  });
}

export function registration(login, password, name) {
  return fetch('https://webdev-hw-api.vercel.app/api/user', {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
      name,
    }),
  })
  .then((response) => {
    if (response.status === 400 ){
      throw new Error ("Такой пользователь уже существует")
    }
    return response.json();
  });
}
