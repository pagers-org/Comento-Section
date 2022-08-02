export const delay2sAPI = (callback = () => console.log('init delay2sAPI')) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), 2000);
  });
}

export const delay1sAPI = (callback = () => console.log('init delay1sAPI')) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(callback()), 1000);
  });
}