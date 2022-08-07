// program to display a text using setTimeout method
const greet = () => {
  return 3;
}

setTimeout(greet, 3000);
console.log('이 메세지는 먼저 출력됩니다!');

// null
// null > greet
// null > greet > setTimeout(greet, 3000) > console.log()
