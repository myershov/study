var p=1,k=10;
var m1 = [], m2 = [], m3 = [], m4 = [], m5 = [], ml;

function mas(a,b){
return Math.floor(Math.random() * (b - a)) + a;
 }

for(var i=0;i<10;i++){
    m1[i] = mas(p, k);
    m2[i] = mas(p, k);
    m3[i] = mas(p, k);
    m4[i] = mas(p, k);
    m5[i] = mas(p, k);
}

function sum(a){
    var total = 0;
        for(var i = 0; i < a.length; i++) {
            total += a[i];
        }
    return total / a.length; 
}
ml = [sum(m1), sum(m2), sum(m3), sum(m4), sum(m5)];
document.write(sum(m1));
