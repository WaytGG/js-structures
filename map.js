const map1 = new Map();

map1.set('Привет','Hé')
map1.set('Пока', 'Jusquà')
map1.set('Хлеб', 'Pain')
map1.set('Кот', 'Chat')
map1.set('Рука', 'Main')

console.log(map1.get('Привет'));

const search = '';
let found;

map1.forEach((value, key) => {
  if (value === search) {
    found = key
  }
});

console.log(found);