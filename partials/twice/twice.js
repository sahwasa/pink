//var myModule = angular.module("todoApp",[]); // create module 

$(document).ready(function(){
    $(".nav-tabs a").click(function(){ // boostrab tab event
        $(this).tab('show');
    });

    $('.dropdown-toggle').dropdown()
   
    /*$('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
    });*/
});



var myMoudle = angular.module('myApp', []); //myApp modeul create

myMoudle.controller('todoCtrl',todoCtrl);
myMoudle.controller('mainCtrl',mainCtrl);
myMoudle.controller('customerCtrl',customerCtrl);


  function customerCtrl ($scope) {
    
    var customerList = [{name:'영희', age:10}, {name:'순희', age:28}];
    var youngCusterList = [];
    angular.forEach(customerList, function(value, key){

    	if(value.age < 18){
      		youngCusterList.push(value);
     	}

    });

    $scope.customerList = customerList;
    $scope.youngCusterList = youngCusterList;
  
  }


 function mainCtrl($scope){ // menuList App

  var menuList = [
                {itemId:1, itemName: '샌드위치'  ,  itemPrice: 2000 , itemCount : 0 },
                {itemId:2, itemName: '아메리카노',   itemPrice: 1000, itemCount : 0},
                {itemId:3, itemName: '카푸치노',   itemPrice: 1500,  itemCount : 0}
              
             ];
	 
  $scope.menuList = menuList;
  $scope.totalPrice = 0;
  $scope.buy = function () {
     	$scope.totalPrice = 0;

     	angular.forEach($scope.menuList, function(menu,idx){

     		$scope.totalPrice = $scope.totalPrice + (menu.itemPrice * Number(menu.itemCount));
     	});
  }


}


function todoCtrl($scope){ //todo App 
	
	$scope.appName = 'AngularJS To do App';

	var todoList = [
			{done:true, title: "angular 독서"},
			{done:false, title: "angular 스터디"},
			{done:false, title: "개인 프로젝트 구성"}
	];

	$scope.todoList = todoList;

	// 추가
	$scope.addNewTodo = function(newTitle){
		todoList.push({done:false, title:newTitle});
		$scope.newTitle = "";
	}

	// 보관
	$scope.archive = function(){
		for(var i=$scope.todoList.length-1; i>=0; i--){
			//console.log(i);
			if($scope.todoList[i].done){
				$scope.todoList.splice(i,1);
			}
		}
	}

	// 남은 개수
	$scope.remain = function(){
		var remainCount = 0;
		angular.forEach($scope.todoList, function(value, key){
			if(value.done === false){
				remainCount++;
			}
		});
		return remainCount;
	}

	// 보관중인 목록
	// $scope.doneTodo = function(){	
	// 	for(var i=$scope.todoList.length-1; i>=0; i--){
	// 		//console.log(i);
	// 		if($scope.todoList[i].done == true){
	// 			var add = $scope.todoList[i];
	// 			var doneArray = $scope.doneList.splice(i,0,add);
	// 			console.log(doneArray);
	// 		}
	// 		return doneArray;
	// 	}
	// }

}



