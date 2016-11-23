var s = prompt("Введіть сантиметри для перетворення в метри");
var r = prompt("Введіть сантиметри для перетворення в дюйми");
var t = foo(s,r);
function foo(a , b) {
    var z = a * 0.01;
    var c = b * 2.54;
    document.write(z + " м" + "<br>");
    document.write(c + " дюйм");
}
