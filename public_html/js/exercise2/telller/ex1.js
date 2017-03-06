var p = 1, k = 10;

function mas(a,b){
    return Math.floor(Math.random() * (b - a)) + a;
}

for(var i=0;i<10;i++){
    document.write(mas(p, k)+ '</br>');
}