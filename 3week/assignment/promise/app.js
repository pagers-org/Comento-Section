import { delay2sAPI, delay1sAPI } from "./api.js";

/**
 * 구현해 주세요!
 * todo url : http://jsonplaceholder.typicode.com/todos/todoId
 * user url : http://jsonplaceholder.typicode.com/users/userId
 */

const $article = document.querySelector('#display');
const $buttonsSection = document.querySelector('#buttons');

(() => {
  const todoIdSet = new Set();
  while (todoIdSet.size < 6) {
    todoIdSet.add(Math.floor(Math.random() * 101));
  }

  const todoIds = Array.from(todoIdSet);

  $buttonsSection.insertAdjacentHTML('afterbegin', /* html */`
  <div class="grid">
    <button>${todoIds[0]}</button>
    <button>${todoIds[1]}</button>
    <button>${todoIds[2]}</button>
  </div>
  <div class="grid">
    <button>${todoIds[3]}</button>
    <button>${todoIds[4]}</button>
    <button>${todoIds[5]}</button>
  </div>
  `);
})();


$buttonsSection.addEventListener('click', async ({ target }) => {
  if (!target.matches('button')) return;

  const { textContent: todoId } = target;
  
  // 상단의 todoId로부터 todos를 가져옵니다.
  delay2sAPI();
  // delay2sAPI의 결과 중 하나인 userId로부터 users를 가져옵니다.
  delay1sAPI();

  // 이런 형식의 user data를 가져와서 화면에 출력해주세요.
  const data = {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  };

  $article.textContent = JSON.stringify(data, null, 2);
});