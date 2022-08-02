function* forever() {
  let index = 0;
  while (true) {
      yield index++;
  }
}

let f = forever();
console.log(f.next()); // 0
console.log(f.next()); // 1
console.log(f.next()); // 2
console.log(f.next()); // 3