console.log("////////////////////First Task//////////////////////");
var arrLength = prompt('Длинна массива');
var min = prompt('Start number');
var max = prompt('End number');

console.log(shuffle(arrLength, min, max));

// функция
function shuffle(arrLength, first, last) {
  var min = parseInt(first); // parseInt приведение строки к числу
  var max = parseInt(last); // parseInt приведение строки к числу
  var arrLength =  parseInt(arrLength);
  var arr = []; // возвращаемый массив

  for (i = 0; i < arrLength; i++){
   arr.push(Math.floor(Math.random() * (max - min) + min)); // пишем рандомное число в массив согласно формуле
  }
  
  return arr; // возвращаем заполненный масси
}


console.log("////////////////////Second Task//////////////////////");

var a1 = [1, 2, 3];
var a2 = [4, 5, 6];
var a3 = [7, 8, 9];
var a4 = [10, 11, 12];
var a5 = [13, 14, 15];

function getAverage(a1, a2, a3, a4, a5){
	var sum = 0;
  var arrayOfArrays = []; // массив з усіма массивами
  arrayOfArrays = arrayOfArrays.concat(a1, a2, a3, a4, a5); // Обьеднуемо вси масиви в один

  for(var i = 0; i < arrayOfArrays.length; i++){ // проходимося по всим елементам обьеднанго масива
  	sum = sum + arrayOfArrays[i]; // додаемо кожне значення до змінної sum
  }
  
  return sum/arrayOfArrays.length; // функція повертае сумму подилену на килькість всіх елементів
}

alert(getAverage(a1, a2, a3, a4, a5));

console.log("////////////////////Third Task//////////////////////");

function CalculatePerimetr(){
		var a = prompt('Width');
    var p = a * 4;
    console.log(p);
}

CalculatePerimetr();

console.log("////////////////////Fourth Task//////////////////////");

function CalculateMetr (){
    var Sm = prompt("Сантиметри");
    var M = Sm / 100;
    console.log(M);
}
CalculateMetr ();

console.log("////////////////////Fourth.2 Task//////////////////////");

function CalculateIN (){
    var Sm = prompt("Сантиметри");
    var IN = Sm * 0.39370078740157;
    console.log(IN);
}
CalculateIN ();