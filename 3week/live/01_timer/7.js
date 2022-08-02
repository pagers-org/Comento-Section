let count = 0;

let interval = setInterval(function () {
  count += 1;

  if (count === 5) {
    clearInterval(interval);
  }

  let dateTime = new Date();
  let time = dateTime.toLocaleTimeString();
  console.log(time);

}, 2000);