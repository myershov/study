var s = prompt("Введіть СМ для перетворення в М!");

var r = prompt("Введіть СМ для перетворення в ДМ!");

var t = foo(s,r);

function foo(a, b) {

	var z = a * 0.01;

	var c = b * 2.54;

	document.write(z + " м" + "<br>");
    document.write(c + " дюйм");

}
