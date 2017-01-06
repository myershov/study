var testVar  = prompt('Сторона квадрата(в см.)?','');
function pKvadrata(oneSide) {
    var sum;
    if (typeof oneSide === 'number' && !isNaN(oneSide) && oneSide !==0){
        sum = oneSide * 4;
        alert(sum);
    } else { 
        result = prompt('Еще раз, Настя','');
        pKvadrata(+result);

   }
};
pKvadrata(testVar);
