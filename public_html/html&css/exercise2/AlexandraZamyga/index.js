var currentTrainPosition = 0;

var goToLeft = function(){
    currentTrainPosition -= 600;
    document.getElementById('train').style.left = currentTrainPosition+"px";
}

var goToRight = function(){
    currentTrainPosition += 600;
    document.getElementById('train').style.left = currentTrainPosition + 'px';
}