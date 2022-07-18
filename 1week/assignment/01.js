/** 수정 전 코드  
var i = "Comento Assignment";

function processArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log("Element ", array[i]);
  }

  console.log("I can use variable i outside the loop ", i);

  i = "Finished!";
  window.i = "isFinished?";
}

processArray([1, 2, 3, 4, 5]);

console.log(i);
*/

// 수정 후 코드

// *변경사항: var를 let으로 변경. 전역변수로 선언된 var는 전역객체의 생명주기와 동일.
// 따라서 var를 쓸 경우 i는 processArray함수의 마지막 라인 window.i로 덮어씌워짐
let i = "Comento Assignment";

function processArray(array) {
  // *변경사항: var i=0 => let i=0으로 변경
  for (let i = 0; i < array.length; i++) {
    console.log("Element ", array[i]);
  }

  //만약 for문에서 i를 var로 선언한 경우에는 i가 5로 출력됨 => 왜냐하면 for문의 변수선언문에서 var 키워드로 선언한 변수도 전역변수가 되기때문이다.
  //for문에서 i를 let으로 선언하면 'Comento Assignment'출력됨.
  //왜냐면 let으로 선언한 순간, for문의 코드 블록을 지역스코프로 인정하기 때문이다.
  console.log("I can use variable i outside the loop ", i);

  i = "Finished!";
  window.i = "isFinished?";
}

processArray([1, 2, 3, 4, 5]);

console.log(i);
