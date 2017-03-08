'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'vc2'
  });
}])

.controller('View2Ctrl', [function($scope) {
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
            vm.x1 = 'немає дійсних розвязків';
        }
        
    vm.a1 = vm.a;
    vm.b1 = vm.b;
    vm.c1 = vm.c;
    vm.a = vm.b = vm.c = '';
    $scope.$apply();
    };
}]);
