var arr1 = [1,2,3,4,5];
var arr2 = [1,2,3,4,5];
function mean(arr1, arr2) {
    if (arr1.length === 0 && arr2.length === 0)
        return 0;
    var sum = 0;
    for (var i in arr1) sum += arr1[i];
    for (var i in arr2) sum += arr2[i];
    return sum/(arr1.length + arr2.length);
}
document.write(mean(arr1, arr2));