(function(){
    'use strict';
    angular.module('SIApp',[])
    .controller('SIControllerParent',SIControllerParent)
    .controller('SIControllerParent1',SIControllerParent1)
    .controller('SIControllerChild',SIControllerChild)
    .controller('SIControllerChild1',SIControllerChild1);

    SIControllerParent.$inject = ['$scope'];
    function SIControllerParent($scope) {
        $scope.parentVal = 1;
        $scope.sicp = this;
        $scope.sicp.parentVal = 1;        
    }

    SIControllerChild.$inject = ['$scope'];
    function SIControllerChild($scope) {
        // console.log("Child parentVal: ", $scope.parentVal);
        // console.log("Child $scope: ", $scope);
        
        // $scope.parentVal = 7;
        // console.log("Child parentVal: ", $scope.parentVal);
        // console.log("Child $scope: ", $scope);
        
        // console.log("$scope.pc.parentVal", $scope.sicp.parentVal);
        // $scope.sicp.parentVal = 7
        // console.log("$scope.pc.parentVal", $scope.sicp.parentVal);
        // console.log("Child $scope: ", $scope);
        
        // console.log("$scope.$parent.parentVal", $scope.$parent.parentVal);        
    }
    
    function SIControllerParent1($scope) {
        var parent = this;
        parent.parentVal = 1;
    }
    
    SIControllerChild1.$inject = ['$scope'];
    function SIControllerChild1($scope) {
        var child = this;
        child.parentVal = 4;
        console.log('CC2 $scope : ', $scope);
    }
})();