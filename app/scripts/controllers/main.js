(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name todoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the todoApp
   */
  angular.module('todoApp')
    .controller('ToDoController', function ($scope, localStorageService) {
      var todosInStorage = localStorageService.get('todos');
      $scope.todos = todosInStorage || [];

      $scope.$watch('todos', function () {
        localStorageService.set('todos', $scope.todos);
      }, true);

      $scope.addTodo = function () {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      };

      $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);
      };
    });
}());
