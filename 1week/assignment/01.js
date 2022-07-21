/**
 * 수정해주세요!
 */
let i = 'Comento Assignment';

function processArray(array) {
	for (let i = 0; i < array.length; i++) {
		console.log('Element ', array[i]);
	}

	console.log('I can use variable i outside the loop ', i);

	i = 'Finished!';
	window.i = 'isFinished?';
}

processArray([1, 2, 3, 4, 5]);

console.log(i);
