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
console.log(object);
console.log(object.greet()); // 1번의 결과값 : Hello, World!   this는 object를 가리키므로 this.who는 object.who를 가리킨다.
console.log(object.farewell()); // 2번의 결과값 : Goodbye, undefined! 화살표함수는 this를 생성하지 못하므로 화살표 함수의 this는 상위 코스프인 전역 객체의 windowr가 된다. window에는 who속성이 존재하지 않으므로 undefined를 반환한다.
