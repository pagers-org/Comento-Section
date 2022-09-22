const promiseTest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(3);
    }, 1000)
  })
}

async function greet() {
  const response = await promiseTest();
  console.log(response);
  console.log(1);
}


greet();
console.log('!!');