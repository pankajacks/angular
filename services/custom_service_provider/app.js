(function(){
    'use strict';
    angular.module('ShoppingList', [])
    .controller('ShoppingListController', ShoppingListController)
    .provider('ShoppingListService', ShoppingListServiceProvider)
    .config(Config);

    Config.$inject = ['ShoppingListServiceProvider'];
    function Config(ShoppingListServiceProvider) {
        ShoppingListServiceProvider.default.maxItems = 2;
    }

    ShoppingListController.$inject = ['ShoppingListService'];

    function ShoppingListController(ShoppingListService) {
        var list = this;

        list.items = ShoppingListService.getItems();
        list.name = "";
        list.quantity = "";

        list.addItem = function () {
            try {
                ShoppingListService.addItem(list.name, list.quantity);
            } catch (error) {
                list.message = "Error: " + error.message;
                console.log("Error : ", error.message);
            }
        };

        list.removeItem = function(index) {
            ShoppingListService.removeItem(index);
        }
    }

    function ShoppingListService(maxItem) {
        var service = this;

        var items = [];

        service.addItem = function(itemName, itemQuantity) {
            if (maxItem === undefined || 
                maxItem !== undefined && items.length<maxItem) {
                var item = {
                    name: itemName,
                    quantity: itemQuantity
                };
                items.push(item);
            } else {
                throw new Error("Max items (" + maxItem + ")reached");
            }
        };

        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        };

        service.getItems = function() {
            return items;
        };

        console.log("Service reg");
    }

    function ShoppingListServiceProvider() {
        var provider = this;
        
        provider.default = {
            maxItems: 4
        };

        provider.$get = function () {
            var shoppingList = new ShoppingListService(provider.default.maxItems);
            return shoppingList;
        };
    }
})();