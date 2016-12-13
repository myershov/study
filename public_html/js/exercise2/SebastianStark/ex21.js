var arr0 = [0,1,2,3,4];
var arr1 = [5,6,7,8,9];
var arr2 = [0,1,2,3,4];
var arr3 = [5,6,7,8,9];
var arr4 = [0,1,2,3,4];
function x(arr0, arr1, arr2, arr3, arr4) {
    if (arr0.lenght == 0 || arr1.length == 0 || arr2.length == 0 || arr3.length == 0 || arr4.length == 0 )
        return 0;
    var sum = 0;
    for (var i in arr0) sum += arr0[i];
    for (var i in arr1) sum += arr1[i];
    for (var i in arr2) sum += arr2[i];
    for (var i in arr3) sum += arr3[i];
    for (var i in arr4) sum += arr4[i];
    return sum/(arr0.length + arr1.length + arr2.length + arr3.length + arr4.length);
}
document.write(x(arr0, arr1, arr2, arr3, arr4));