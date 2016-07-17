// Angular Example
'use strict';

define(['projectWeb'], function () {

  angular.module('projectWeb', [])
    // TODO App
    .controller('todoCtrl', function ($scope) {
      // 제목
      $scope.appName = "AngularJS TODO App";

      // 기본 적인 할 일 목록
      $scope.todoList = [
        { done : true, title : "AngularJS 독서"},
        { done : false, title : "AngularJS 공부하기"},
        { done : false, title : "예제 만들어서 git push"}
      ];

      // 새로운 할 일 추가
      $scope.addNewTodo = function (newTitle) {
        if(newTitle == undefined) return;
        if(newTitle === '') return;
        $scope.todoList.push({ done : false, title : newTitle});
        $scope.newTitle = '';
      };

      // 완료한 일(체크 한 일) 보관하기(삭제)
      $scope.archive = function () {
        for ( var i = $scope.todoList.length - 1; i >= 0 ; i--){
          if($scope.todoList[i].done){
            $scope.todoList.splice(i,1);
          }
        };
      };

      //전체 할 일 / 남은 할 일
      $scope.remain = function () {
        var remainCount  = 0;
        angular.forEach($scope.todoList, function (value, key) {
          if(value.done === false){
            remainCount++;
          }
        });
        return remainCount;
      }
    })

    // TODO App 2
    .controller('todo2Ctrl', function ($scope) {
      $scope.appName = "Todos";
      $scope.todos = [
        { id : 1, title : "예제 만들기", completed : false},
        { id : 2, title : "Angular 공부하기", completed : true}
      ];

      $scope.remove = function (id) {
        if(!id) return;

        // 배열에서 제거할 인덱스를 검색
        var deletedTodoIndex = $scope.todos.findIndex(function(todo){
          return todo.id === id;
        });

        if(deletedTodoIndex === -1) return;

        // 배열에서 제거
        $scope.todos.splice(deletedTodoIndex, 1);
      };

      $scope.addTodo = function (todoTitle) {
        if(todoTitle == undefined) return;

        var todoTitle = todoTitle.trim();
        if (todoTitle === '') return;

        // 새로 추가할 아이디 계산
        var newId = !$scope.todos.length ?
          1 : $scope.todos[$scope.todos.length - 1].id + 1;

        // 새로운 투두 객체
        var newTodo = {
          id: newId,
          title: todoTitle,
          completed: false
        };

        // todos 배열에 새로운 투두 추가
        $scope.todos.push(newTodo);
      };

      $scope.$watch('status', function () {
        if ($scope.status === 'completed') {        // if Completed 클릭시
          $scope.statusFilter = {completed: true};  //   필터를 설정한다.
        } else if ($scope.status === 'active') {    // if Active 클릭시
          $scope.statusFilter = {completed: false}; //   필터를 설정한다.
        } else {                                    // if All 클릭시
          $scope.statusFilter = {};                 //   필터를 해제한다.
        }
      });

      $scope.clearCompleted = function () {
        var incompleteTodos = $scope.todos.filter(function (todo) {
          return !todo.completed;
        });
        angular.copy(incompleteTodos, $scope.todos);
      };
    })

    // 메뉴판
    .controller('menuCtrl', function ($scope) {
      $scope.appName = "메뉴판";
      $scope.menuList = [
        { itemId : 1, itemName : '샌드위치', itemPrice : 2000, itemCount : 0},
        { itemId : 2, itemName : '아메리카노', itemPrice : 1000, itemCount : 0},
        { itemId : 3, itemName : '카푸치노', itemPrice : 1500, itemCount : 0}
      ];

      $scope.totalPrice = 0;

      $scope.buy = function(){
        $scope.totalPrice = 0; // 가격 초기화 - 초기화 하지 않으면 계속 누적된 금액으로 계산됨
        angular.forEach($scope.menuList, function(menu, idx){
          $scope.totalPrice = $scope.totlaPrice + (menu.itemPrice * Number(menu.itemCount));
        });
      };
    })
  
    // ng-repeat="(key, value) in [])"


});





