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

object.method(callback, 1, 2); // 결과값 : undefined  함수 내부의 this는 글로벌객체를 뜻하므로 글로벌 객체의 length속성은 없어서 this.length=undefined가 되므로 undefined를 호출한다.
