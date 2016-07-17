var app = angular.module("MyApp", []);
        app.controller("todoCtrl", function($scope){
            $scope.appName = "AngularJS TODO APP";
            $scope.todoList = todoList;

            $scope.addNewTodo = function(newTitle){
                todoList.push(new Todo(false, newTitle));
                $scope.newTitle = "";
            }

            $scope.archive = function(){
                for(var i = $scope.todoList.length - 1; i >= 0; i--){
                    if($scope.todoList[i].done){
                        $scope.todoList.splice(i, 1);
                    }
                }
            }

            $scope.remain = function(){
                var todoCount = 0;

                $scope.todoList.forEach(function(obj){
                    if(!obj.done){ todoCount++; }
                });

                return todoCount;
            }
        });

        var todoList = [
            new Todo(true, "AngularJS 독서"),
            new Todo(false, "AngularJS 공부하기"),
            new Todo(false, "개인 프로젝트 구성")
        ];

        function Todo(done, title){
            this.done = done;
            this.title = title;
        }

