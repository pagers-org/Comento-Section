/**
 * 수정해주세요!
 */
function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      //var을 let으로 수정
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
