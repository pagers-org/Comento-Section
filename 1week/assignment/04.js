/**
 * 맞춰주세요!
 */
const object = {
	who: 'World',
	greet() {
		return `Hello, ${this.who}!`;
	},
	farewell: () => {
		return `Goodbye, ${this.who}!`;
	},
};

console.log(object.greet()); // 1번의 결과값 : Hello, World!
console.log(object.farewell()); // 2번의 결과값 : Goodbye, undefined!

// 1번 해설
// 함수선언식 내부의 this는 함수선언식이 메소드일 경우 호출한 객체에 바인딩됨

// 2번 해설
// 화살표함수 내부에는 this가 없어 화살표함수의 상위 스코프의 this를 바인딩함. object 바깥 스코프는 전역스코프인 window인데, window에 who가 없어 undefined가 리턴됨
