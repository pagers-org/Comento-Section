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

console.log(object.getMessage()); // 1번의 결과값 : Hello, Comento!!
