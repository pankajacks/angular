(function(){
    angular.module('AutoCounter',[])
    .controller('AutoCounterController', AutoCounterController);

    AutoCounterController.$inject = ['$scope', '$timeout'];
    function AutoCounterController($scope, $timeout) {
        $scope.counter = 0;

        $scope.startCounter = function () {
            console.log("Counter Fired wiat for 2 second");
            $timeout(function(){
                $scope.counter++;
                console.log("Counter Incremented", $scope.counter);
            }, 2000);
        };

        // $scope.startCounter = function () {
        //     console.log("Counter Fired wiat for 2 second");
        //     setTimeout(function(){
        //         $scope.$apply(function(){
        //             $scope.counter++;
        //             console.log("Counter Incremented", $scope.counter);
        //         });
        //     }, 2000);
        // };

        // $scope.startCounter = function () {
        //     console.log("Counter Fired wiat for 2 second");
        //     setTimeout(function(){
        //         $scope.counter++;
        //         console.log("Counter Incremented", $scope.counter);
        //         $scope.$digest();
        //     }, 2000);
        // };
    }
})();