var x = prompt("Введите число");
var y = prompt("Введите число");
var arr, max_number, i;
arr = [];
max_number = 10;

while (arr.length < max_number) {
        a = Math.floor(Math.random() * max_number);
        arr.push(a);
}
arr[0]=x;
arr[max_number-1]=y;
document.write(arr + " " );