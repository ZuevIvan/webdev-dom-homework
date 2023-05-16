export function getComments() {
  return fetch('https://webdev-hw-api.vercel.app/api/v1/ivan-zuev/comments')
    .then((response) => response.json())
    .then((responseData) => responseData.comments);
}

export function addNewElToList(name, text) {
  return fetch('https://webdev-hw-api.vercel.app/api/v1/ivan-zuev/comments', {
    method: "POST",
    body: JSON.stringify({
      name,
      text
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      if (response.status === 500) {
        return Promise.reject("Сервер упал");
      } else if (response.status === 400) {
        return Promise.reject("Объект с ошибкой в формате");
      } else {
        return response.json();
      }
    });
}

