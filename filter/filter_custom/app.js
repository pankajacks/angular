(function(){
    angular.module('CustomFilter', [])
    .controller('CustomFilterController',CustomFilterController)
    .filter('custom',CustomFilterFactory);

    CustomFilterController.$inject = ['$scope','customFilter'];
    function CustomFilterController($scope, customFilter) {
        $scope.email = "pankaj@gmail.com";
        $scope.status = "status";

        $scope.checkEmail = function () {
            $scope.status = customFilter($scope.email);
        }
    }

    function CustomFilterFactory() {
        return function(arg) {
            arg = arg || "";
            if (arg.indexOf("@") < arg.lastIndexOf(".")) {
                return "valid";
            }
            return "in-valid";
        };
    }
})();