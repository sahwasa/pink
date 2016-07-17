var todoList = [
    { done: true, title: "AngularJS 독서" },
    { done: false, title: "AngularJS 공부하기" },
    { done: false, title: "개인 프로젝트 구성" }
];

var app = angular.module('jsTree', []);
app.controller('todoCtrl', function($scope) {
    $scope.appName = 'AngularJS TODO APP';
    $scope.todoList = todoList;
    $scope.addNewTodo = function(newTitle) {
        todoList.push({
            done: false,
            title: newTitle
        });
        $scope.newTitle = '';
    };
    $scope.archive = function() {
        for (var i = $scope.todoList.length - 1; i >= 0; i--) {
            if ($scope.todoList[i].done) {
                $scope.todoList.splice(i, 1);
            }
        };
    };
    $scope.remain = function() {
        var remainCount = 0;
        angular.forEach($scope.todoList, function(value, key) {
            if (value.done === false) {
                remainCount++;
            }
        });
        return remainCount;
    };
});

app.controller('mainCtrl', function($scope) {
            var menuList = [
                { itemId: 1, itemName: '샌드위치', itemPrice: 2000, itemCount: 0 },
                { itemId: 2, itmeName: '아메리카노', itemPrice: 1000, itemCount: 0 },
                { itemId: 3, itemName: '카푸치노', itemPrice: 1500, itemCount: 0 }
            ]

            app.controller('mainCtrl', function($scope) {
                $scope.menuList = menuList;
                $scope.totalPrice = 0;
                $scope.totalText = "구매한 것 없음";
                $scope.buy = function() {
                    $scope.totalPrice = 0;
                    $scope.totalText = "";
                    angular.forEach($scope.menuList, function(menu) {
                        $scope.totalPrice += (menu.itemPrice * Number(menu.itemCount));
                        if (Number(menu.itemCount) > 0) {
                            if ($scope.totalText.length > 0) {
                                $scope.totalText += ", ";
                            }
                            $scope.totalText += menu.itemName + " " + menu.itemCount + "개";
                        }
                    });
                };
                $scope.reset = function() {
                    angular.forEach($scope.menuList, function(menu) {
                        menu.itemCount = 0;
                    });
                    $scope.totalPrice = 0;
                    $scope.totalText = "구매한 것 없음"
                };
            });
        }

        function customerCtrl($scope) {
            var customerList = [
                { name: '봄이', age: 3 },
                { name: '여름이', age: 5 }
            ];
            var youngCusterList = [];
            angular.forEach(customerList, function(value, key) {
                if (value.age < 15) {
                    youngCusterList.push(value);
                }
            });
            $scope.customerList = customerList;
            $scope.youngCusterList = youngCusterList;
        }

        agular.module('jsTree', []).controller('mainCtrl', function($scope) {
            $scope.getStyle = function() {
                return { "color": "skyblue" };
            };
        });
        agular.module('jsTree', []).directive('hello', function() {
            return function(scope, iElement, iAttrs, controller) {
                //링크함수는 해당 지시자 적용된 DOM에 연결된 함수를 의미
                //연결함수 (scope객체, 연결요소객체, 속성객체, 컨트롤러객체)인자로 주어짐
                //설정함수가 함수를 반환하면 링크함수를 반환하는것이고,
                //객체를 반환하면 설정객체를 반환하는것이다.
                iElement.html("<h1>hello" + iAttrs.name + "</h1>")
            };
        });
        agular.module('jsTree', []).directive('hello', function($log) {
            return {
                name: 0,
                priority: 0,
                template: '<div></div>',
                //templateUrl: 'directive.html',
                replace: false,
                restrict: 'A',
                scope: false,
                //require: 'ngModel',
                controller: function($scope, $element, $attrs, $transclude) {},
                compile: function compile(tElement, tAttrs) {
                    return {
                        pre: function preLink(scope, iElement, iAttrs, controller) {},
                        post: function postLink(scope, iElement, iAttrs, controller) {
                            $log.log("<h1>hello" + iAttrs.name + "</h1>");
                            iElement.html("<h1>hello" + iAttrs.name + "</h1>");
                        }
                    }
                    //또는
                    //return function postLink(scope, iElement, iAttrs, controller, transcludeFn) {}
                },
                //또는
                //link: {
                //pre: function preLink(scope, iElement, iAttrs, controller, transcludeFn) {}
                //post: function postLink(scope, iElement, iAttrs, controller, transcludeFn) {}
                //}
                //또는
                //link: function postLink(scope, iElement, iAttrs, controller) {}
            };
        });
        agular.module('jsTree', []).directive('hello', function() {
            return {
                templateUrl: "template/index.html",
                //template: "<h1>hello<span>name</span></h1>",
                restrict: "AE",
                controller: function($scope, $element, $attrs, $transclude) {
                        $scope.name = $attrs.name;
                    }
                    /*link: function link (scope, iEL, iAt, ctrl) {
                        iEl.find("span").text(iAt.name);
                    }*/
            }
        });
        agular.module('jsTree', []).controller('demoCtrl', ['$scope', function($scope) {
            $scope.name = "Ctrl에서 사용된 name model";
        }]).directive('hello', function() {
            return {
                templateUrl: "template/index.html",
                restrict: "AE",
                scope: true,
                controller: function($scope, $element, $attrs, $transclude) {
                    if ($attrs.name) $scope.name = $attrs.name;
                }
            }
        });
        agular.module('jsTree', []).controller('demoCtrl', ['$scope', function($scope) {
            $scope.name = "Ctrl에서 사용된 name model";
        }]).directive('hello', function() {
            return {
                templateUrl: "template/index.html",
                restrict: "AE",
                scope: {name:"@to"}
            }
        });
        agular.module('jsTree', []).controller('demoCtrl', ['$scope', function($scope) {
            $scope.helloList = [{name:'google'},{name:'naver'},{name:'angular'}] ;
            $scope.sendMessage = function(toSb){
                console.log(toSb+"에게 메시지를 보낸다.");
            }
        }]).directive('hello', function() {
            return {
                templateUrl: "template/index.html",
                restrict: "AE",
                scope: {
                    name:"@to",
                    send: "&"
                }
            }
        });
        agular.module('jsTree', []).controller('demoCtrl', ['$scope', function($scope) {
            $scope.helloList = [{name:'google'},{name:'naver'},{name:'angular'}] ;
            }
        }]).directive('hello', function() {
            return {
                templateUrl: "template/index.html",
                restrict: "AE",
                scope: {
                    name:"=to"
                }
            }
        });