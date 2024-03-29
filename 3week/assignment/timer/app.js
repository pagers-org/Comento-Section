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
const dayMonth = "01/01/"; // 생일을 기입해주세요! 형식 : MM/DD/
let birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
  birthday = dayMonth + nextYear;
}

const countDown = new Date(birthday).getTime();
const x = setInterval(() => {
  const now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  if (distance < 0) {
    document.getElementById("headline").innerText = "It's my birthday!";
    document.getElementById("countdown").style.display = "none";
    document.getElementById("content").style.display = "block";
    clearInterval(x);
  }
}, 0);