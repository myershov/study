var pos = 0;
var neg = 0;
var p = prompt("Введіть число");

if (p<0) {
	p*=-1;
}

for(var i=1; i<=p; i++) {
    if(i%2==1)
    	neg++;
    else
    	pos++;
}

console.log("Парних - " + pos + " Непарних - " + neg);