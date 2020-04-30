(function(){
    'use strict';
    angular.module('ToDoList',[])
    .controller('ToDoListController',ToDoListController)
    .controller('ToDoListAddController',ToDoListAddController)
    .service('ToDoListService',ToDoListService);

    ToDoListController.$inject = ['ToDoListService'];
    function ToDoListAddController(ToDoListService) {
        var taskAdder = this;

        taskAdder.taskName = "";
        taskAdder.taskDateTime = "";

        taskAdder.addTask = function() {
            ToDoListService.addTask(taskAdder.taskName, taskAdder.taskDateTime);
        }
    }

    ToDoListAddController.$inject = ['ToDoListService'];
    function ToDoListController(ToDoListService) {
        var showList = this;
        showList.tasks = ToDoListService.getTasks();
        showList.removeTask = function(index) {
            ToDoListService.removeTask(index);
        }
    }

    function ToDoListService() {
        var service = this;
        var tasks = [];

        service.addTask = function(taskName, taskDateTime) {
            var task = {
                task: taskName,
                dtime: taskDateTime
            };
            tasks.push(task);
        };

        service.getTasks = function() {
            return tasks;
        }

        service.removeTask = function(index) {
            tasks.splice(index,1);
        }
    }
})();