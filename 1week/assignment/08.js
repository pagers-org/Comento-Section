/**
 * 리팩토링 해주세요!
 */
class Car {
  constructor(model) {
    this.model = model;
  }
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}
class Audi extends Car {
  constructor(model) {
    super(model);
    this.brand = "Audi";
  }
}

class BMW extends Car {
  constructor(model) {
    super(model);
    this.brand = "BMW";
  }
}

const Audi_A6 = new Audi("A6");
const BMW_S_Class = new BMW("S_Class");

Audi_A6.start();
BMW_S_Class.start();
