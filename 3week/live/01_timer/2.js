const greet = () => {
  console.log('Hello comento');
}

const intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);