var min = 2;//prompt('Число?', '');
var max = 7;//prompt('Число?', '');
    
function randomInteger(min, max) {
    var rand;
    var newArr = [];
    
    for (var i = min; i < max; i++) {
        rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        newArr.push(rand);
    }
    
    return newArr;
}

console.log(randomInteger(min, max));



//function gerRandomArbitary(min, max)
//{
//
//  var rand = min + Math.() * (max - min);
//  rand = Math.round(rand);
//  return rand;
//
//}
