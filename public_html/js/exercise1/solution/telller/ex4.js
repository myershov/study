var l,p=0,np=0,n=prompt('enter number');
l=n.length;
if(isNaN(+n)){alert('corect enter');}
else{
    for(var i=0;i<l;i++){
        if(n[i]%2===0)p++;
        else np++;
    }}
document.write('parni = '+p+'</br>'+'neparni = '+np);