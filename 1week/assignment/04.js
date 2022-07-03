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
  }
};

console.log(object.greet());    // 1번의 결과값 : ?
console.log(object.farewell()); // 2번의 결과값 : ?