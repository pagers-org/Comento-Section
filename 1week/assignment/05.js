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

object.method(callback, 1, 2); // 결과값 : 4 (strict mode가 적용되었을때는 undefined)

// 이유: 콜백함수를 포함한 일반함수로 호출된 모든 함수의 내부의 this는 전역객체가 바인딩된다.
// this는 객체의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수이기에, 객체의 메서드 내부 또는 생성자 함수 내부에서만 의미가있다.
