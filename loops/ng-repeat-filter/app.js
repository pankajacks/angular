(function(){
    'use strict';
    var productNameList = [
        'Barik Rawa',
        'Cooking Oil Gemini',
        'Poha',
        'Tata salt',
        'Maggi',
        'Haldiram Namkeen',
        'Bathing Soap',
        'Ajwain'
    ];

    angular.module('FilterData',[])
    .controller('FilterDataController',FilterDataController);

    FilterDataController.$inject = ['$scope'];
    function FilterDataController($scope) {
        $scope.productList = productNameList;
        console.log("product List: ", $scope.productList);
        
    }

})();