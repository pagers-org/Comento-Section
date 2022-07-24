/**
 * 리팩토링 해주세요!
 */
const SUMMER_START = 1561075200;
const SUMMER_END = 1569196800;
const SUMMER_RATE = 10;
const WINTER_RATE = 20;
const WINTER_SERVICE_CHARGE = 30;

const before = (date, limit) => date < limit;
const after = (date, limit) => limit < date;

const getCharge = (quantity, date) => {
  if (before(date, SUMMER_START) || after(date, SUMMER_END)) {
    return quantity * WINTER_RATE + WINTER_SERVICE_CHARGE;
  }
  else {
    return quantity * SUMMER_RATE;
  }
}

const charge = getCharge(3, new Date().getTime());
console.log(charge);
