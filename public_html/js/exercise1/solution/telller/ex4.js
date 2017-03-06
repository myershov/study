var p=0, np=0, n=prompt('enter number');
    if(isNaN(+n)){
        alert('corect enter');
    } else {
        for(var i = 0, l = n.length; i<l; i++){
            window[n[i]%2===0 ? 'p': 'np']++;
        }
    }
document.write('parni = '+p+'</br>'+'neparni = '+np);