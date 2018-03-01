var m = 0, d = 0;
var sm = prompt("Введіть сантиметри для переведення");

function smvm(sm) {
	return(m=sm/100);
}

function smvd(sm) {
	var d=sm*2.54;
	return(d);
}

console.log(sm + " см = " + (smvm(sm)) + " м = " + (smvd(sm)) + " д ");