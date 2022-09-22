const hello = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('hello commento!');
    }, 3000);
  })
}

(async ()=> {
  await hello();
  console.log('!!!');
})()