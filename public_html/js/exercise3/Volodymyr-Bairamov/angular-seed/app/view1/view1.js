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
    
    vm.getResult = function() {
        var a = + vm.a,
            b = + vm.b,
            c = + vm.c,
            D = (b * b) - (4 * a * c), 
            x1, x, x2;
    
        vm.x1 = vm.x2 = vm.x = '';    
        
        if (D > 0) {
            x1 = Math.sqrt((-b + Math.sqrt(D)) / (2 * a));
            x2 = Math.sqrt((-b - Math.sqrt(D)) / (2 * a));
            
            vm.x1 = isNaN(x1) ?  "не має дісних коренів": x1.toFixed(2);
            vm.x2 = isNaN(x2) ?  "не має дісних коренів": x2.toFixed(2);
            
            vm.x1 = '' + vm.x1;
            vm.x2 = '' + vm.x2;
        } else if (D === 0) {
            x = Math.sqrt(-b / (2 * a));
            vm.x1 = " " + x.toFixed(2);
            return false;
        } else {
            vm.x1 = 'немає дійсних розвязків';
        }
    vm.a = vm.b = vm.c = '';
        
    };
}]);