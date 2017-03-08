//function sq() {
//  var a = document.frm.a.value;
//  var b = document.frm.b.value;
//  var c = document.frm.c.value;
//  var res = document.getElementById("sqres");
//  var x1,x2;
//
//  var d = (b * b) - (4 * a * c);
//  if ( d > 0 ) {
//      x1 = (-b+Math.sqrt(d))/(2*a);
//      x2 = (-b-Math.sqrt(d))/(2*a);
//      string = "x1 = " + x1 + "</br> x2 = " + x2;  
//      res.innerHTML = string;
//    
//  } else {
//      if ( d === 0 ) {
//        x1 = x2 = -b / ( 2 * a );
//        string = "x1 = " + x1 + "</br> x2 = " + x2;  
//        res.innerHTML = string;
//      } else {
//        string = "Коренів немає";  
//        res.innerHTML = string;;
//      }
//  }
//}
'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vc1'
  });
}])

.controller('View1Ctrl', [function() {
    var vm = this;
    vm.arr = [];
    vm.value = vm.result = '';
    
    function getFact(value) {
      var res = 1, arr = [];
      for (var i = 1; i <= value; i++) {
        res *= i;
        arr.push('Iteration: ' + i + ' Result: ' + res);
      }
      return { res: res, arr: arr };
    }
    
    vm.getResult = function() {
      var temp  = getFact(vm.value);
      vm.result = temp.res;
      vm.arr = temp.arr;
    };
}]);