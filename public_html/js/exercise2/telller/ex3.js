var n=prompt('enter number');;

function  per(a){
    return a*4;
}
if (isNaN(+n)) {
    alert('corect enter');
} else{
    document.write(per(n));
}