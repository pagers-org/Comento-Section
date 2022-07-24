/**
 * 맞춰주세요!
 */
function foo() {
	let a = (b = 0);
	a++;
	return a;
}
foo();
console.log(typeof a); // 1번의 결과값 : undefined
console.log(typeof b); // 2번의 결과값 : number
function foo2() {
	let a;
	globalThis.b = 0; // globalThis는 window와 동일합니다.
	a = globalThis.b;
	a++;
	return a;
}
foo2();
console.log(typeof a); // 3번의 결과값 : undefined
console.log(typeof b); // 4번의 결과값 : number

// 1번 해설
// 전역스코프에 a가 없으므로 undefined type.

// 2번 해설
// 변수 키워드 없이 선언되어 전역스코프에 할당됨. b = 0이므로 number type.

// 3번 해설
// 1번 결과와 동일한 이유

// 4번 해설
// 2번 결과와 동일한 이유
