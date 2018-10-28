export const url = (() => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://fk-1801.herokuapp.com';
  }

  return 'http://172.20.10.7:5000';
})();

export const endpoints = {
  food: '/food',
  search: '/search'
};
