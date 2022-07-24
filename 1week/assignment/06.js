/**
 * 맞춰주세요!
 */
function foo() {
  let a = (b = 0);
  a++;
  return a;
}
foo();
console.log(typeof a); // 1번의 결과값 : undefined
console.log(typeof b); // 2번의 결과값 : number

function foo2() {
  let a;
  globalThis.b = 0; // globalThis는 window와 동일합니다.
  a = globalThis.b;
  a++;
  return a;
}
foo2();
console.log(typeof a); // 3번의 결과값 : undefined
console.log(typeof b); // 4번의 결과값 : number
