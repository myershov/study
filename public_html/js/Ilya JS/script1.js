var path = 'https://learn.js.ru/types';

const a = path.slice(8);

var arr = a.split('/');

const host = arr[0];

const newpass = host.replace('learn', 'study');

console.log(newpass);