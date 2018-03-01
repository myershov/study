var min = prompt("Введіть мінімальне число діапазону");
var max = prompt("Введіть маскимальне число діапазону");
var array = [];
array.length = 10;
var i;

function randomium(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

if(min<max){
for (i = 0; i < array.length; i++) {
	var r = randomium(min, max);
  array[i]=r;
	}

for (i = 0; i < array.length; i++) {
  console.log(array[ i ]);
	}
}

else{
	console.log("Помилка! Мінімальне значення більше за максимальне!");
}