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

console.log(object.getMessage()); // 1번의 결과값 : 'Hello, Comento!!'
// 왜냐하면 this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이기 때문에
// this는 여기서 object를 가리키게 되고, object.message는 'Hello, Comento!!' 이다.
// 만약 return this.message가 아니라 return message를 하는 경우에는 "Goodbye, Comento!"가 출력된다.
