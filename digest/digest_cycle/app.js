(function(){
    angular.module('DigestCycle',[])
    .controller('DigestCycleController', DigestCycleController);

    DigestCycleController.$inject = ['$scope'];
    function DigestCycleController($scope) {
        $scope.counter1 = 0;
        $scope.counter2 = 0;
        $scope.name = "Pankaj";
        
        $scope.incCounter1Once = function () {
            $scope.counter1 = 1;
        };

        $scope.incCounter2 = function() {
            $scope.counter2++;
        }

        $scope.$watch(function(){
            console.log("Digest Loop Fired");
            
        });

        // $scope.$watch('counter2', function(newValue, oldValue){
        //     console.log("counter2 oldVal: ", oldValue);
        //     console.log("counter2 newVal: ", newValue);
        // });
        
        // $scope.$watch('counter1', function(newValue, oldValue){
        //     console.log("counter1 oldVal: ", oldValue);
        //     console.log("counter1 newVal: ", newValue);
        // });

        $scope.showNumberOfWatcher = function () {
            console.log("No. of Watchers: " + $scope.$$watchersCount);
        };
    }
})();