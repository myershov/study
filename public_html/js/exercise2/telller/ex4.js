var n=prompt('enter number sm->m'),n1=prompt('enter number sm->dm');

function  m(a){
    return a/100;
}
function  d(a){
    return a/2.54;
}
if (isNaN(+n)) {
    alert('corect enter');
} else{
    document.write('sm->m  ' + m(n) + '</br>');
}

if (isNaN(+n1)) {
    alert('corect enter');
} else{
    document.write('sm->dm  ' + d(n1));
}