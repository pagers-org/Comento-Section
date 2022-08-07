function greet(name, lastName, message) {
  console.log('Hello' + ' ' + name + ' ' + lastName + ' ' + message);
}

setInterval(greet, 1000, 'Parang', 'Hyun', 'is Good?');