// program to display a text using setTimeout method
const greet = () => {
  console.log(3);
}

setTimeout(() => {
  console.log(3);
}, 3000);
console.log('이 메세지는 먼저 출력됩니다!');

// null
// null > greet
// null > greet > setTimeout(greet, 3000) > console.log()
