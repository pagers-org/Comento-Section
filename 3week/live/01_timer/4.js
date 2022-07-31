let count = 0;

function increaseCount() {
  count += 1;
  console.log(count)
}

const id = setTimeout(increaseCount, 3000);

clearTimeout(id);
console.log('setTimeout이 종료되었습니다.');