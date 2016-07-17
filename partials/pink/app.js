'use strict';

var app=angular.module('projectWeb',['ngCookies']);
app.controller('todoCtrl', function($scope){
  $scope.appName="AngularJS TODO APP";
  $scope.todoList=[
   { done : true, title : "AngularJS 독서"},
   { done : false, title : "AngularJS 공부하기"},
   { done : false, title : "개인 프로젝트 구성"}
  ];
  $scope.addNewItem=function(){
    $scope.todoList.push({done:false, title:$scope.newTitle});
    $scope.newTitle="";
  };
  $scope.archive=function(){
    for(var i=$scope.todoList.length-1; i>=0; i--){
      if($scope.todoList[i].done)
      $scope.todoList.splice(i,1);
    }
  };
  $scope.remain=function(){
    var remainCount=0;
    angular.forEach($scope.todoList, function(value, index){
      if(!value.done){
        remainCount++;
      }
    });
    return remainCount;
  };
});

app.controller('menuCtrl',function($scope){
  var item=[
    {itemId: 1, menu:'샌드위치', cost:'2000', count:0},
    {itemId:2, menu:'아메리카노', cost:'1000', count:0},
    {itemId:3, menu:'카푸치노', cost:'1500', count:0},
  ];
  $scope.item=item;
  $scope.totalPrice=0;//없으면 초기값이 없어서 총액에 아무것도 안찍힘
  $scope.buy=function(){
    $scope.totalPrice=0;//초기화를 안해주면 이전값을 가지고있어서 계산할 수록 누적됨
    angular.forEach($scope.item, function(menu, idx){
      $scope.totalPrice=$scope.totalPrice+ (menu.cost*menu.count);
    });
  };
});

app.controller('customer',function($scope){
  var customers=[
    {name:'김수현',age:'29'},
    {name:'유아인',age:'31'},
    {name:'주원',age:'30'}
  ];
  $scope.customers=customers;
  var customObj={
    name:'송중기',
    age:'32',
    job:'배우'
  };
  $scope.customObj=customObj;
  var star=['이동현','우규민','박용택'];
  $scope.star=star;

});
app.controller("customerCtrl",function ($scope){
  var customerList = [{name:"영희", age:10},{name:"철수", age:17},{name:"둘리", age:70}];
  var youngCusterList = [];
  angular.forEach(customerList, function(value, key){
    if(value.age < 18){
      youngCusterList.push(value);
    }
  });

  $scope.customerList = customerList;
  $scope.youngCusterList = youngCusterList;
});
//$addController 또는 $removeController() 선언 위치
// 	}).removeContorller();
app.controller("formValidator",function($scope){
});
app.controller('evtCtrl', function($scope) {
	$scope.appName = '이벤트지시자';
	$scope.mes = '';
	$scope.eventCnt = 0;
	$scope.handleEvt=function(mesage){
		$scope.mes = mesage;
		$scope.eventCnt++;
	};
});
app.controller('css_class', function($scope) {
	$scope.bgStyle = {backgroundColor:'red'};
	$scope.changeColor=function(color){
		$scope.bgStyle.backgroundColor=color;
	};
});
app.controller('mvcCtrl', function($scope){
	$scope.greetingModel="안녕하세요.";

	$scope.viewModel = true;
	$scope.twiceMVC = "https://www.icloud.com/keynote/0000iX57P7suEEj2d7H7Bw_2Q#mvc";

	$scope.clearModel = function(msg){
		alert(msg+"이 Model은 사라집니다.");
		$scope.greetingModel="";
	};

});
app.controller("cookieCtrl",['$scope','$cookies',function($scope,$cookies){
  $scope.val=$cookies.get("test")||"없음";

  $scope.getValue=function(){
    $scope.val=$cookies.get('test');
  };
  $scope.putValue=function(iV){
    $cookies.put("test",iV);
  };
}]);

app.directive('hellopink', function(){
	return function(scope, iElement, iAttrs, controller){
		iElement.html("<h3>"+iAttrs.name+"</h3>");
		iElement.append("<br>");
	};
});
app.directive('helloPink', function(){
	return function(scope, iElement, iAttrs, controller){
		iElement.html("<h3>"+iAttrs.name+"</h3>");
		iElement.append("<br>");
	};
});
app.directive('helloP', function(){
	return function(scope, iElement, iAttrs, controller){
		iElement.html("<h3>"+iAttrs.name+"</h3>");
		iElement.append("<br>");
	};
});
app.directive('pinkcompile', function(){
	return{
		name : 0,
		template:'<div></div>',
		replace : false,
		transclude : true,
//		restrict : E,
		scope : false,
		compile : function(tElement, tAttrs){
			return {
				pre : function (scope, iElement, iAttrs, controller){
				},
				post : function (scope,iElement,iAttrs,controller){
					iElement.html("<h3>1 "+iAttrs.name+"</h3>");
				}
			};
		}
	};
});
app.directive('pinkcompile2', function(){
	return{
		name : 0,
		template:'<div></div>',
		replace : false,
		transclude : true,
//		restrict : E,
		scope : false,
		compile : function(tElement, tAttrs){
			return function(scope, iElement, iAttrs, controller, transcludeFn){
				iElement.html("<h3>2 "+iAttrs.name+"</h3>");
			};
		}
	};
});
app.directive('pinklink', function(){
	return{
		link : {
			pre : function preLink(scope, iElement, iAttrs, controller, transcludeFn){
				iElement.html("<h3>3 "+iAttrs.name+"</h3>");
			},
			post : function postLink(scope, iElement, iAttrs, controller, transcludeFn){ },
		}
	};
});
app.directive('pinklink2', function(){
	return{
 		link : function (scope, iElement, iAttrs, controller){
	 			iElement.html("<h3>4 "+iAttrs.name+"</h3>");
 		}
	};
});
app.controller('transCtrl', ['$scope', function($scope){
		$scope.noticeList = [{
			url : "notice/1",
			text : "공지사항 첫 번째 글입니다."
		},{
			url : "notice/2",
			text : "공지사항 두 번째 글입니다."
		},{
			url : "notice/3",
			text : "공지사항 세 번째 글입니다."
		}];
}]);
app.directive('panel', function(){
	return{
		templateUrl : "template/panelTmpl.html",
		restrict : "AE",
		transclude : true,
		scope : {
			title : "@",
			type : "@",
		}
	};
});
