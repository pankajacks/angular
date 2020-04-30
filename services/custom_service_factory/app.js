(function(){
    'use strict';
    angular.module('ShoppingList', [])
    .controller('ShoppingList1Controller', ShoppingList1Controller)
    .controller('ShoppingList2Controller', ShoppingList2Controller)
    .factory('ShoppingListFactory', ShoppingListFactory);

    ShoppingList1Controller.$inject = ['ShoppingListFactory'];
    function ShoppingList1Controller(ShoppingListFactory) {
        var list1 = this;
        var ShoppingList = ShoppingListFactory();

        list1.items = ShoppingList.getItems();
        list1.name = "";
        list1.quantity = "";

        list1.addItem = function () {
            ShoppingList.addItem(list1.name, list1.quantity);            
            console.log(list1.name, list1.quantity);
        };

        list1.removeItem = function(index) {
            ShoppingList.removeItem(index);
        }
    }

    ShoppingList2Controller.$inject = ['ShoppingListFactory'];
    function ShoppingList2Controller(ShoppingListFactory) {
        var list2 = this;
        var ShoppingList = ShoppingListFactory(3);

        list2.items = ShoppingList.getItems();
        list2.name = "";
        list2.quantity = "";

        list2.addItem = function () {
            try {
                ShoppingList.addItem(list2.name, list2.quantity);
            } catch (error) {
                list2.message = "Error: " + error.message;
                console.log("Error : ", error.message);
            }
        };

        list2.removeItem = function(index) {
            ShoppingList.removeItem(index);
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

    function ShoppingListFactory() {
        var factory = function (maxItem) {
            return new ShoppingListService(maxItem)
        }
        return factory;
    }
})();