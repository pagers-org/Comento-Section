/**
 * 리팩토링 해주세요!
 */
// const SUMMER_START = 1561075200;
// const SUMMER_END = 1569196800;
// const SUMMER_RATE = 10;
// const WINTER_RATE = 20;
// const WINTER_SERVICE_CHARGE = 30;

// const before = (date, limit) => date < limit;
// const after = (date, limit) => limit < date;

// const getCharge = (quantity, date) => {
//   if (before(date, SUMMER_START) || after(date, SUMMER_END)) {
//     return quantity * WINTER_RATE + WINTER_SERVICE_CHARGE;
//   }
//   else {
//     return quantity * SUMMER_RATE;
//   }
// }

// const charge = getCharge(3, new Date().getTime());
// console.log(charge);

class Charge {
  constructor(
    SUMMER_START,
    SUMMER_END,
    SUMMER_RATE,
    WINTER_RATE,
    WINTER_SERVICE_CHARGE
  ) {
    this.SUMMER_START = SUMMER_START;
    this.SUMMER_END = SUMMER_END;
    this.SUMMER_RATE = SUMMER_RATE;
    this.WINTER_RATE = WINTER_RATE;
    this.WINTER_SERVICE_CHARGE = WINTER_SERVICE_CHARGE;
  }
  getCharge(quantity, date) {
    const before = (date, limit) => date < limit;
    const after = (date, limit) => limit < date;
    if (before(date, this.SUMMER_START) || after(date, this.SUMMER_END)) {
      return quantity * this.WINTER_RATE + this.WINTER_SERVICE_CHARGE;
    } else {
      return quantity * this.SUMMER_RATE;
    }
  }
}

const charge = new Charge("1561075200", "1569196800", "10", "20", "30");

let result = charge.getCharge(3, new Date().getTime());

console.log(result);
