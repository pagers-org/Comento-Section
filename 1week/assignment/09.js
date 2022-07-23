/**
 * 리팩토링 해주세요!
 */
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

const charge = new Charge(1561075200, 1569196800, 10, 20, 30);

const result = charge.getCharge(3, new Date().getTime());

console.log(result);
