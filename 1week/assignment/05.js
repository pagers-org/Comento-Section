/**
 * 맞춰주세요!
 */
var length = 4;

function callback() {
	console.log(this.length);
}

const object = {
	length: 5,
	method(callback) {
		callback();
	},
};

object.method(callback, 1, 2); // 결과값 : 4

// object.method에서 callback으로 전달된 인자는 메소드가 아닌 일반 함수이므로 내부의 this는 전역객체에 바인딩됨
