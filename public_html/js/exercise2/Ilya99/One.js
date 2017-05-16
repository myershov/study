var x = prompt("Enter min_number");
var y = prompt("Enter max_number");
var arr = [], 
    max_number = 17, 
    i,
    a;

while (arr.length < max_number) {
  a = Math.floor(Math.random() * max_number);
  arr.push(a);
}
arr[0]=x;
arr[max_number-1]=y;
document.write(arr + " " );