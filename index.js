
import { getComments, addNewElToList as apiAddNewElToList } from './api.js';
import { renderComments, addNewComment as renderAddNewComment } from './render.js';


// определение даты
import { getDate } from './render.js';


const buttonElement = document.getElementById("add-button");

// добавление нового комментария
buttonElement.addEventListener("click", () => {
  addNewComment();
});

// удаление последнего комментария
function removeLastElement() {
  comments.pop(); // удаляем последний элемент из массива comments
  renderComments(comments); // перерисовываем список комментариев
}

// массив комментариев
const comments = [
  {
    name: 'Глеб Фокин',
    comment: 'Это будет первый комментарий на этой странице',
    date: '12.02.22 12:18',
    likes: 3,
    isLiked: ''
  },
  {
    name: 'Варвара Н.',
    comment: 'Мне нравится как оформлена эта страница! ❤',
    date: '13.02.22 19:22',
    likes: 75,
    isLiked: '-active-like'
  }
];


  // рендер
    // const renderComments = (commentsServer) =>{
    //   const commentsHTML = commentsServer
    //   .map((comment, index) => {
    //    return `<li id= "comment" class="comment" data-index="${index}">
    //        <div class="comment-header">
    //          <div class= "comment-name" data-name="${comment.author.name}">${comment.author.name}</div>
    //          <div>${getDate(comment.date)}</div>
    //         </div>    
    //         <div class="comment-body">
    //           <div class="comment-text" data-text="${comment.text}">
    //             ${comment.text}
    //           </div>
    //         </div>
    //         <div class="comment-footer">
    //           <div class="likes" data-index="${index}">
    //             <span class="likes-counter" data-index="${index}">${comment.likes}</span>
    //             <button class= "like-button ${comment.isLiked}" data-index="${index}"></button>
    //           </div>
    //         </div>
    //      </li>`;
      
    //   }).join("");

    
    //   const commentsEl = document.getElementById("comments");
    
    //   commentsEl.innerHTML = commentsHTML;


    //   const usersLikes = document.querySelectorAll('.likes');
    //   const numberLikesEl = document.querySelectorAll('.likes-counter');
    //   const likesPainter = document.querySelectorAll('.like-button')

    //   // обработчик лайков
    //   for (let userLike of usersLikes ) {
    //     userLike.addEventListener('click',(event) => {
    //       event.stopPropagation();
    //       const indexUserLike = userLike.dataset.index;
        
    //       if (comments[indexUserLike].isLiked === '') {
    //           comments[indexUserLike].likes += 1;
    //           comments[indexUserLike].isLiked = '-active-like';
    //       } else{
    //           comments[indexUserLike].likes -= 1;
    //           comments[indexUserLike].isLiked = '';
    //         }
    //       renderComments(commentsServer);

    //     })
    //   }
      
    //   // ответ на комментарий
    //   const responseUsersComments = document.querySelectorAll('.comment');
    //   for(const responseUserComment of responseUsersComments ){
    //     responseUserComment.addEventListener('click',() => {
    //       const userName = comments[responseUserComment.dataset.index].name;
    //       const userText = comments[responseUserComment.dataset.index].comment;
    //       textInputElement.value = '>'+ "  " + ' "' + `${userText}`  + ' "' + ' ©' + '\n' +'('+ `${userName}`+')' + '\n'; 
    //     })
    //   }

    // }
    
    // renderComments(commentsServer);

    