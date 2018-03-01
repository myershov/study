var a = prompt("Введіть сторону квадрата");

function perimetr(a){
	return a=a*4;
	}

if(a > 0){
console.log("Периметр квадрата = " + perimetr(a));
}
else {
alert("Сторона не може бути від'ємною або дорівнювати нулю");
}