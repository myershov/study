var i,s=0,n=prompt('enter number');
if (isNaN(+n)) {
    alert('corect enter');
} else{
    for(i=1;i<=n;i++) {
        s+=i;
    }
}
document.write(s + '</br>');