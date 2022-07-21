/**
 * 리팩토링 해주세요!
 */
class Car {
	constructor(brand, model) {
		this.brand = brand;
		this.model = model;
	}

	start() {
		console.log(`${this.brand} ${this.model} is starting...`);
	}
}

const Audi_A6 = new Car('Audi', 'A6');
const BMW_S_Class = new Car('BMW', 'S_Class');

Audi_A6.start();
BMW_S_Class.start();
