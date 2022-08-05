/**
 * 구현해 주세요!
 * 다음 생일까지 남은 시간 계산하기
 */

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let today = new Date();

const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0");
const yyyy = today.getFullYear();
const nextYear = yyyy + 1;
const dayMonth = "03/03/"; // 생일을 기입해주세요! 형식 : MM/DD/
let birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
  birthday = dayMonth + nextYear;
}

const countDown = new Date(birthday).getTime();
// 여기에 구현해주세요!

const timer = () => {
  const countStart = new Date().getTime();
  const $days = document.getElementById("days");
  const $hours = document.getElementById("hours");
  const $minutes = document.getElementById("minutes");
  const $seconds = document.getElementById("seconds");
  let time = countDown - countStart;

  const days = parseInt(time / day);
  $days.textContent = days;
  time = time % day;

  const hours = parseInt(time / hour);
  $hours.textContent = hours;
  time = time % hour;

  const minutes = parseInt(time / minute);
  $minutes.textContent = minutes;
  time = time % minute;

  const seconds = parseInt(time / second);
  $seconds.textContent = seconds;
};

setInterval(timer, second);
