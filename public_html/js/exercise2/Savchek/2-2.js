var k = 0, rez = 0, summa, summ= 0, i;
var array1 = [15];
var array2 = [15, 15];
var array3 = [15, 15, 15];
var array4 = [15, 15, 15, 15];
var array5 = [15, 15, 15, 15, 15];

function plus(array1){
	summa=0;
	for (i = 0; i < array1.length; i++) {
	summa+=array1[i];
	k++;
}
	return(summa);
}

summ+=plus(array1);
summ+=plus(array2);
summ+=plus(array3);
summ+=plus(array4);
summ+=plus(array5);
rez=summ/k;

console.log(rez);