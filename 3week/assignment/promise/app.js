import { delay2sAPI, delay1sAPI } from "./api.js";

/**
 * 구현해 주세요!
 * todo url : http://jsonplaceholder.typicode.com/todos/todoId
 * user url : http://jsonplaceholder.typicode.com/users/userId
 */

const $article = document.querySelector("#display");
const $buttonsSection = document.querySelector("#buttons");

(() => {
  const todoIdSet = new Set();
  while (todoIdSet.size < 6) {
    todoIdSet.add(Math.floor(Math.random() * 101));
  }

  const todoIds = Array.from(todoIdSet);

  $buttonsSection.insertAdjacentHTML(
    "afterbegin",
    /* html */ `
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
  `
  );
})();
function f(id) {
  const todoId = id;
  return function () {
    return fetch(`http://jsonplaceholder.typicode.com/todos/${todoId}`);
  };
}
function f1(id) {
  const userId = id;
  return function () {
    return fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
  };
}

$buttonsSection.addEventListener("click", async ({ target }) => {
  if (!target.matches("button")) return;

  const { textContent: todoId } = target;

  // 상단의 todoId로부터 todos를 가져옵니다.
  const res = await delay2sAPI(f(todoId));
  const { userId } = await res.json();

  // delay2sAPI의 결과 중 하나인 userId로부터 users를 가져옵니다.
  const res1 = await delay1sAPI(f1(userId));
  const data = await res1.json();

  $article.textContent = JSON.stringify(data, null, 2);
});
