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

const calendar = { before, after };

const getCharge = (quantity, date) => {
  if (calendar.before(date, CONSTANTS.SUMMER_START) || calendar.after(date, CONSTANTS.SUMMER_END)) {
    return quantity * CONSTANTS.WINTER_RATE + CONSTANTS.WINTER_SERVICE_CHARGE;
  }
  else {
    return quantity * CONSTANTS.SUMMER_RATE;
  }
}

const charge = getCharge(3, new Date().getTime());
console.log(charge);
