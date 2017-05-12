var n = prompt("Веддіть");
parni = 0;
neparni = 0;
if (isNaN(+n)) {
	document.write("Це не цифра!")
} else {
	for (var i = 0, l = n.length; i < l; i++) {
		n[i]%2 === 0 ? parni++: neparni++;
	}
	document.write("parni:" + parni + " neparni: " + neparni);
}