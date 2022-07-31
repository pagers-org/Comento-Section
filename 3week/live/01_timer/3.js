function showTime() {

  // 데이트 객체 반환
  const dateTime = new Date();

  // 지역 시간 반환
  const time = dateTime.toLocaleTimeString();

  console.log(time)

  // 3초마다 실행
  setTimeout(showTime, 3000);
}

showTime();