/**
 * 수정해주세요!
 */
function printMatrix(matrix) {
	for (var i = 0; i < matrix.length; i++) {
		var line = matrix[i];
		for (var j = 0; j < line.length; j++) {
			var element = line[j];
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
