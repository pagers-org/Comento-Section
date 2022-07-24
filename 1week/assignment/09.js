/**
 * 리팩토링 해주세요!
 */
const SUMMER_START_MONTH = 6; // 여름 시작 6월
const SUMMER_END_MONTH = 8; // 여름 끝 8월
const SUMMER_RATE = 10;
const WINTER_RATE = 20;
const WINTER_SERVICE_CHARGE = 30;

const getCharge = (quantity, month) => {
  if (month < SUMMER_START_MONTH || month > SUMMER_END_MONTH) {
    // 9월부터 5월까지 , 가을, 겨울, 봄
    return quantity * WINTER_RATE + WINTER_SERVICE_CHARGE;
  } else {
    // 6월부터 8월까지 여름
    return quantity * SUMMER_RATE;
  }
};

const charge = getCharge(3, new Date().getMonth() + 1);
console.log(charge); //여름일때 30, 가을, 겨울, 봄 일때 90 출력
