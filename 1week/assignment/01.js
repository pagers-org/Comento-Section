/**
 * 수정해주세요!
 */

var i = "Comento Assignment";

function processArray(array) {
  for (let i = 0; i < array.length; i++) {
    //var을 let으로 수정.
    console.log("Element ", array[i]);
  }

  console.log("I can use variable i outside the loop ", i);

  i = "Finished!";
  global.i = "isFinished?";
}

processArray([1, 2, 3, 4, 5]);

console.log(i);
