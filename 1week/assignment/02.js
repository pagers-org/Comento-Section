/**
 * 수정해주세요!
 */
function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];

    // 변경사항: var i=0을 => let i=0으로 변경하였습니다. (최소한으로 바꾸기 위해 다른 var는 수정해주지 않았습니다.)
    // 만약에 var i=0이 된다면, for문의 코드 블록은 지역스코프로 인정을 하지 않기에 i=3으로 덧씌워지게 됩니다.
    // 이럴경우 for문 전체가 종료되어버리기에 적어도 for문안에 중첩된 for문 만이라도 최소한 ㅣet으로 바꾸어주어야 합니다.
    for (let i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix); // 희망하는 결과값 : 1, 2, 3, 4, 5, 6, 7, 8, 9
