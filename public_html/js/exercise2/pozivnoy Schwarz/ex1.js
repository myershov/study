
    var min = prompt('Число?','');
    var max = prompt('Число?','');
    
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

    debugger
    alert(randomInteger(min, max));



//function gerRandomArbitary(min, max)
//{
//
//  var rand = min + Math.() * (max - min);
//  rand = Math.round(rand);
//  return rand;
//
//}
