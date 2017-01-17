var arr1 = [12];
var arr2 = [22, 1];
var arr3 = [2];
var arr4 = [2];
var arr5 = [12, 24, 34];

function mean() {
    var sum = 0;
    var elementCount = 0;
    var arr;
    for (var i = 0, l = arguments.length; i < l; i++) {
        arr = arguments[i];
        for (var item in arr) {
            sum += arr[item];
        }
        elementCount += arr.length;
    }

    return sum / elementCount;
}
document.write(mean(arr1, arr2, arr3, arr4, arr5));