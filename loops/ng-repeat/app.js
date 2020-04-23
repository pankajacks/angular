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

    var productNameQtyList = [
        {name:'Barik Rawa',qty:'1 kg'},
        {name:'Cooking Oil Gemini',qty:'5ltr'},
        {name:'Poha',qty:'2 kg'},
        {name:'Tata salt',qty:'1 packet'},
        {name:'Maggi', qty:'10 Pack'},
        {name:'Haldiram Namkeen',qty:'1 kg'},
        {name:'Bathing Soap',qty:'4 No.'},
        {name:'Ajwain',qty:'250 gm'}
    ];

    angular.module('ProductList',[])
    .controller('ProductListController', ProductListController);

    ProductListController.$inject = ['$scope'];
    function ProductListController($scope) {
        $scope.productList = productNameList;
        $scope.productListObj = productNameQtyList;

        $scope.addItem = function() {
            var item = {
                name:$scope.newItem,
                qty:$scope.newItemQty
            };

            $scope.productListObj.push(item);
        };
    }

})();