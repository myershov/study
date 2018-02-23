const people = [
  {name: 'Petro',
   surname: 'Petrenko'
  },

  {name: 'Pavlo',
   surname: 'Pavlenko'
  },

  {name: 'Fedya',
   surname: 'Fedotov'
  }
];


const users = prompt('search', 'petro').toLowerCase();
const results = people.filter(function(item) {
  return ~item.name.toLowerCase().indexOf(users) || ~item.surname.toLowerCase().indexOf(users);
});

console.log(results);
