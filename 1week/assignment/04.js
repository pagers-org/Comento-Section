/**
 * 맞춰주세요!
 */
const object = {
  who: "World",
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

console.log(object.greet());
console.log(object.farewell());
// 1번의 결과값 : Hello, World!
// 2번의 결과값 : Goodbye, undefined!

// 이유: 2번의 결과값이 undefined로 나온 이유는 메서드로 정의한 화살표함수 내부에 this는 메서드를 호출한 객체를 가리키지 않고 상위 컨텍스트인 전역객체 window를 가리키게 된다.
// 객체의 메서드를 정의할 때 화살표 함수를 사용하면, 바인딩 과정을 생략하기 때문에 this가 가리키는 곳은 스코프체인에 따라 상위 스코프인 this를 바라보게 된다.
// 참고로 undefined인 이유는 객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.
// 만약 Goodbye, World!를 출력하고 싶다면 메소드를 위한 단축 표기법인 ES6의 축약 메소드 표현을 사용하는 것이 좋다.
// 이 예제를 통해화살표 함수가 일반 함수에 비해 표현만 간략한 것이 아니라 내부 동작도 기존의 함수보다 간략하다는 것을 알 수 있다.
