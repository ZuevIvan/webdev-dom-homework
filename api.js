export const host = 'https://webdev-hw-api.vercel.app/api/v2/:personal-key'

export function getComments() {
  const fetchPromise = fetch( host , {
    method: "GET",
  });

  return fetchPromise.then((response) => {
    const jsonPromise = response.json();
    return jsonPromise.then((responseData) => {
      return responseData.comments;
    });
  });
}

export function addNewElToList(name, text) {
  const fetchPromise = fetch(host, {
    method: "POST",
    body: JSON.stringify({
      name,
      text
    }),
  });

  return fetchPromise.then((response) => {
    if (response.status === 500) {
      return Promise.reject("Сервер упал");
    } else if (response.status === 400) {
      return Promise.reject("Объект с ошибкой в формате");
    } else {
      return response.json();
    }
  });
}
