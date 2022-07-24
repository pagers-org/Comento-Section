/**
 * 리팩토링 해주세요!
 */
class Car {
  // Car라는 부모 클래스
  constructor(model) {
    this.model = model;
  }
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}
class Audi extends Car {
  // Car 클래스 상속
  constructor(model) {
    super(model);
    this.brand = "Audi"; //Audi 브랜드
  }
}

class BMW extends Car {
  // Car 클래스 상속
  constructor(model) {
    super(model);
    this.brand = "BMW"; //BMW 브랜드
  }
}

const Audi_A6 = new Audi("A6");
const BMW_S_Class = new BMW("S_Class");

Audi_A6.start();
BMW_S_Class.start();
