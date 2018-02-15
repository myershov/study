const users = [
  {name: 'Petro'},
  
  {name: 'Pavlo'},

  {name: 'Fedya'}
];

const nameUser = prompt('name', 'petro').toLowerCase();
const result = users.filter(function(item) {
  console.log(item.name.toLowerCase() === nameUser);
  return ~item.name.toLowerCase().indexOf(nameUser);  
})
console.log(result);