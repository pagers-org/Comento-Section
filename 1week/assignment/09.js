/**
 * 리팩토링 해주세요!
 */
// 따로따로 흩어져있는 변수들과 함수를 엮어주기위해 Charge라는 이름으로 클래스를 만들어줌.
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
// Charge의 인스턴스를 새로 하나 선언해줌.
const charge = new Charge(1561075200, 1569196800, 10, 20, 30);
// 최종 결과물을 담은 result 변수 선언 및 할당.
const result = charge.getCharge(3, new Date().getTime());

console.log(result);
