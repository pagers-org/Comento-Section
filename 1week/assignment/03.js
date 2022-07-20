/**
 * 맞춰주세요!
 */
const object = {
  message: "Hello, Comento!!",
  getMessage() {
    const message = "Goodbye, Comento!";
    return this.message;
  },
};

console.log(object.getMessage()); // 1번의 결과값 : Hello, Comento!! getMessage()함수에서 this는 object를 가리키므로 object.message를 가리킨다.
