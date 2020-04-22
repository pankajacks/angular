(function(){
    'use strict';
    angular.module('FilterExample',[])
    .controller('FilterExampleController', FilterExampleController);

    FilterExampleController.$inject = ['$scope', '$filter'];

    function FilterExampleController($scope, $filter) {
        $scope.name = "";
        $scope.changeOnFocus = function () {
            $scope.jsFilter = $filter('uppercase')("Hello " + $scope.name);
        }
    }

})();