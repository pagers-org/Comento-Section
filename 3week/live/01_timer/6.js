function showTime() {
  const dateTime = new Date();
  const time = dateTime.toLocaleTimeString();
  console.log(time)
}

const display = setInterval(showTime, 1000);