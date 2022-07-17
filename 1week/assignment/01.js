/**
 * 수정해주세요!
 */
var i = 'Comento Assignment';

function processArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log('Element ', array[i]);
  }

  console.log('I can use variable i outside the loop ', i);

  i = 'Finished!';
  window.i = 'isFinished?';
}
// asdfalskd;fjla;skdjf;oaisjd;flkajs;dflijas;ldfkja;lsdijfal;skdjf
processArray([1, 2, 3, 4, 5]);

console.log(i);