var arr0 = [0, 1, 2];
var arr1 = [2, 3];
var arr2 = [0,1,2,3,4];
var arr3 = [5,6,7,8,9];
var arr4 = [0,1,2,3,4];
var arr5 = [0,1,2,3,4];

var allArrays = [arr0, arr1, arr2, arr3, arr4, arr5];

var res;

function getAverage(allArr) {
  var isArrayEmtpy = allArr.some(function(item) {
    return item.length === 0;
  });
  
  var sum = 0;
  var elementsCount = 0;
  
  if (isArrayEmtpy) {
    return false;
  }

  
  allArr.forEach(function(arr) {
    arr.forEach(function(number) {
       sum += number;
    });
    elementsCount += arr.length;
  });
  
  console.log('sum %d', sum);
  console.log('elementsCount %d', elementsCount);
  
  return sum / elementsCount;
}

res = getAverage(allArrays);

document.write(res);

//function x(arr0, arr1, arr2, arr3, arr4) {
//    if (arr0.lenght == 0 || arr1.length == 0 || arr2.length == 0 || arr3.length == 0 || arr4.length == 0 )
//        return 0;
//      
//    var sum = 0;
//    for (var i in arr0) sum += arr0[i];
//    for (var i in arr1) sum += arr1[i];
//    for (var i in arr2) sum += arr2[i];
//    for (var i in arr3) sum += arr3[i];
//    for (var i in arr4) sum += arr4[i];
//    
//    return sum/(arr0.length + arr1.length + arr2.length + arr3.length + arr4.length);
//}


//x(arr0, arr1, arr2, arr3, arr4)
