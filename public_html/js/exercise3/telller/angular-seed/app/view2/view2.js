//function sq() {
//  var a = document.frm.a.value;
//  var b = document.frm.b.value;
//  var c = document.frm.c.value;
//  var res = document.getElementById("sqres");
//  var x1,x2;
//  var d = (b * b) - (4 * a * c);
//  
//  if ( d > 0 ) {
//    x1 = (-b+Math.sqrt(d))/(2*a);
//    x2 = (-b-Math.sqrt(d))/(2*a);
//    if (x1<0) {
//      string = "x1 немає";
//    } else {
//      if(x1 === 0){
//        string = "x11=x12=0";
//      } else {
//        Math.sqrt(x1);
//      }
//    }
//    Math.sqrt(x1);
//    string = "x1 = " + x1 + "</br> x2 = " + x2;  
//    res.innerHTML = string;
//    } else if (d === 0) {
//      x1 = x2 = -b / ( 2 * a );
//      string = "x1 = " + x1 + "</br> x2 = " + x2;  
//      res.innerHTML = string;
//    } else {
//      string = "Коренів немає";  
//      res.innerHTML = string;
//    }
//  }
//  

'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'vc2'
  });
}])

.controller('View2Ctrl', [function() {
    var vm = this;
    vm.getResult = function() {
        var a = + vm.a,
            b = + vm.b,
            c = + vm.c,
            D = (b * b) - (4 * a * c), 
            x1, x, x2;
    
        vm.d = D;
        vm.x1 = vm.x2 = vm.x = '';    
        
        if (D > 0) {
            x1 = (-b + Math.sqrt(D)) / (2 * a);
            x2 = (-b - Math.sqrt(D)) / (2 * a);
            
            vm.x1 = " " + x1.toFixed(2);
            vm.x2 = " " + x2.toFixed(2);
        } else if (D === 0) {
            x = -b / (2 * a);
            vm.x1 = " " + x.toFixed(2);
            return false;
        } else {
            vm.x1 = 'No result';
        }
        
      vm.a1 = vm.a;
      vm.b1 = vm.b;
      vm.c1 = vm.c;
//      vm.a = vm.b = vm.c = '';
//      $scope.$applyAsync();
    };
}]);
