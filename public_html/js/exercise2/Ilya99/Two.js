function sered(a) {
		var sum = 0;

	for (var i = 0; i < a.length; i++) {
		sum += a[i];
	}

		return sum/a.length;
		}
		var arr1 = new Array(23,65,17,18)
		var arr2 = new Array(3,5,3,4)
		var arr3 = new Array(2,17,22)
		var arr4 = new Array(5,2,7)
		var arr5 = new Array(3,4,3,4,3,4,3)

		document.write("1 масив: " + arr1 + "<br>");
		document.write("2 масив: " + arr2 + "<br>");
		document.write("3 масив: " + arr3 + "<br>");
		document.write("4 масив: " + arr4 + "<br>");
		document.write("5 масив: " + arr5 + "<br><br>");


		document.write("Середнє арифметичне першого масиву: " + sered(arr1) + "<br>");
		document.write("Середнє арифметичне другого масиву: " + sered(arr2) + "<br>");
		document.write("Середнє арифметичне третього масиву: " + sered(arr3) + "<br>");
		document.write("Середнє арифметичне четвертого масиву: " + sered(arr4) + "<br>");
		document.write("Середнє арифметичне п'ятого' масиву: " + sered(arr5) + "<br><br>");

var sum = (sered(arr1) + sered(arr2) + sered(arr3) + sered(arr4) + sered(arr5))/5;

		document.write("Середнє арифметичне всіх п'яти масивів: " + sum + "<br>");
