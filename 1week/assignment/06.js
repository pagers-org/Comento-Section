/**
 * 맞춰주세요!
 */
function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();
console.log(typeof a); // 1번의 결과값 : undefined   a의 식별자는 let이므로 foo스코프를 벗어나면 사라진다.
console.log(typeof b); // 2번의 결과값 : number      b는 식별자없이 선어했으므로 암묵적으로 전역스코프를 가져서 b의 스코프는 전역스코프이다.

function foo2() {
  let a;
  globalThis.b = 0; // globalThis는 window와 동일합니다.
  a = globalThis.b;
  a++;
  return a;
}
foo2();
console.log(typeof a); // 3번의 결과값 : undefined  a의 식별자는 let이므로 foo2스코프를 벗어나면 사라진다.
console.log(typeof b); // 4번의 결과값 : number     전역객체의 b프로퍼티를 할당했으므로 b의 스코프는 전역스코프이다.
