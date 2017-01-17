var test = prompt('enter number');
var sum = 0;

if (isNaN(+test)) {
    alert('lohpidr');
} else {
    for (var i = 0; i < test; i++) {
        sum += i;
        document.write('New sum is = ' + sum + ', included ' + i + ' <br />');
    }
}

document.write('res is = ' + sum);