const handler = (generator) => {
  const localIterator = generator();

  function callIterator(res) {
    const next = localIterator.next(res);
    if (next.done) return Promise.resolve(next.value);

    Promise.resolve(next.value).then(response => {
      callIterator(response);
    });
  }

  callIterator();
}


function* callAPI() {
  const response = yield fetch('http://jsonplaceholder.typicode.com/todos/1');
  const data = yield response.json();
  console.log('1');
  console.log(data);
}

handler(callAPI);