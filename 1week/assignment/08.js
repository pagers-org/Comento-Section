/**
 * 리팩토링 해주세요!
 */
//개별적인 브랜드로 Class를 만들어주지 말고, 전체를 아우르는 하나의 Class인 Car를 만들어줍니다.
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  start(brand, model) {
    // start()에서 전달받은 인수로 함수를 실행합니다.
    this.brand = brand;
    this.model = model;
    console.log(`${this.brand} ${this.model} is starting`);
  }
}

// car라는 새로운 인스턴스를 생성합니다.
const car = new Car("Audi", "A6");

//각각 브랜드별로 함수를 실행시켜줍니다.
car.start("Audi", "A6");
car.start("BMW", "S_Class");
