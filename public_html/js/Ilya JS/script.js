var str = '12 jan 2018';

var arr = str.split(' ');

const month = {
  'jan' : '01',
  'feb' : '02',
  'mar' : '03'
};

arr[1] = month[arr[1]];

const lol = arr.join('.');
console.log(lol);