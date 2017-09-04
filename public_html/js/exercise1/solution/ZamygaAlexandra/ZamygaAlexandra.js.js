console.log("////////////////////First Task//////////////////////");
var startNumber = 10;
var endNumber = 20;

for (var i = startNumber; i <= endNumber; i++){
    if(i !== 12){
        console.log(i * i);
    }
}
console.log("////////////////////Second Task//////////////////////");

var startNumber = 35;
var endNumber = 87;

for (var i = startNumber; i <= endNumber; i++){
    var remain = i%7;
    if(remain === 1 || remain === 2 || remain === 5 ){
        console.log(i);
    }
}

console.log("////////////////////Third and Fourth Task//////////////////////");

var number = prompt('Enter number');
var sum = 0;
var pairedCount = 0;
var notPairedCount = 0;

for (var i = 1; i <= number; i++){
    sum = sum + i;
    if(i%2 === 0){
        pairedCount++;
    }else{
        notPairedCount++;
    }
}

console.log('Amount', sum);
console.log('Paired', pairedCount);
console.log('Not Paired', notPairedCount);