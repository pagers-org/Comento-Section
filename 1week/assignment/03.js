/**
 * 맞춰주세요!
 */
const object = {
	message: 'Hello, Comento!!',
	getMessage() {
		const message = 'Goodbye, Comento!';
		return this.message;
	},
};

console.log(object.getMessage()); // 1번의 결과값 : 'Hello, Comento!!'

// object.getMessage()의 return값인 this.message에서 this는 getMessage 메소드가 속한 object에 바인딩되므로 object.message인 'Hello, Comento!!'가 출력됨
