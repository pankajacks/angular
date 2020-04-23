(function(){
    angular.module('DataBinding',[])
    .controller('DataBindingController', DataBindingController);

    DataBindingController.$inject = ['$scope'];
    function DataBindingController($scope) {
        $scope.var0 = 0;
        $scope.var1 = 1;
        // $scope.var2 = 2;

        $scope.showNumberOfWatchers = function() {
            console.log("No. of watcher: ", $scope.$$watchersCount);
        };

        $scope.addVar = function() {
            $scope.var2 = $scope.var0 + 2;
        }

        $scope.showVar1Log = function () {
            console.log("var 1: ", $scope.var1);
        }

        $scope.showVar2Log = function () {
            console.log("var 2: ", $scope.var2);
        }
    }
})();