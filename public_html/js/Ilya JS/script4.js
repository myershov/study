let user ='Andrey';
user = user.toLowerCase();
let search = prompt ('search', 'rey');
search = search.toLowerCase();
const isSearch = ~user.indexOf(search);
user = user[0].toUpperCase() + user.slice(1)

alert(isSearch? user : 'Not found');