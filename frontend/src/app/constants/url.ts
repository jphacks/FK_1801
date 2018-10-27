console.log(process.env.NODE_ENV);

export const url = (() => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://fk-1801.herokuapp.com';
  }

  return 'http://localhost:5000';
})();

export const endpoints = {
  dummy: '/dummy'
};
