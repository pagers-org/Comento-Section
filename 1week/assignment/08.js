/**
 * 리팩토링 해주세요!
 */
class Audi {
  constructor(model) {
    this.brand = 'Audi'
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

class BMW {
  constructor(model) {
    this.brand = 'BMW'
    this.model = model;
  }

  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

const Audi_A6 = new Audi('A6');
const BMW_S_Class = new BMW('S_Class');

Audi_A6.start();
BMW_S_Class.start();