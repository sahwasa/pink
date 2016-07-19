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

app.directive('hello1', function(){
  return{
    template:"<h2>Hello <span>name</span></h2>",
    restrict:"AEC",
    link:function link (scope,iEl,iAt,ctrl){
      iEl.find("span").text(iAt.name);
    }
  };
});
// 아쉬운점
// - 템플릿을 변경하려면 자바스크립트 함수를 직접 수정해야함
// - 링크함수에서 템플릿 마크업 구조를 정확하게 알고 있어야함
app.directive('hello2', function(){
  return{
    // template:"<h1>Hello <span>name</span></h1>",
    templateUrl:"template/helloTmpl.html",
    restrict:"AE",
    link:function link (scope,iEl,iAt,ctrl){
      scope.name=iAt.name;
    }
  };
});
// 템플릿 코드와 지시자 정의 코드가 분리됨.
app.directive('hello3', function(){
  return{
    templateUrl:"template/helloTmpl.html",
    restrict:"AECM",
    controller:function($scope,$element,$attrs,$transclude){
      if($attrs.name) $scope.name = $attrs.name;
    }
  };
})
.directive('hello3Re', function(){
  return{
    templateUrl:"template/helloTmpl.html",
    scope:true,
    restrict:"AECM",
    controller:function($scope,$element,$attrs,$transclude){
      if($attrs.name) $scope.name = $attrs.name;
    }
  };
})
.directive('hello3Re2', function(){
  return{
    templateUrl:"template/helloTmpl.html",
    restrict:"AECM",
    scope:true,
    controller:function($scope,$element,$attrs,$transclude){
      if($attrs.name) $scope.name = $attrs.name;
    }
  };
});
app.controller('directiveCtrl',['$scope',function($scope){
  $scope.kakaoList=[
    {name:'neo'},
    {name:'prodo'},
    {name:'con'},
    {name:'muji'}
  ];
  $scope.sendMessage=function(kakao){
    alert(kakao+"에게 메시지를 보낸다.");
  };
}])
.directive('hello4', function(){
  return{
    templateUrl:"template/helloTmpl.html",
    restrict:"AEC",
    scope:{
      name:"@to"
      }
    };
});
app.directive('hello5', function(){
  return{
    templateUrl:"template/sendMessageTmpl.html",
    restrict:"AEC",
    scope:{
      name:"@to",
      send:"&"
      }
    };
});
app.directive('hello6', function(){
return{
  templateUrl:"template/bindingTmpl.html",
  restrict:"AE",
  scope:{
    name:"=to"
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
app.directive('ngSparkline', [function () {
 return {
  restrict: 'EA',
  scope : {
   chartData : "@"
  },
  link: function (scope, iElement, iAttrs) {
   var chartData = scope.$eval(scope.chartData),
    options = {
     type : iAttrs.chartType || 'line'
    };
   jQuery(iElement).sparkline(chartData, options);
  }
 };
}])
  // 스파크라인 플러그인은 인자가 숫자형 데이터를 포함한 배열이어야한다.
  // chart-data="[1,22,4,2,12,3]"는 문자열이므로 이를 배열로 바꾸기 위해
  // $eval메서드를 사용했다/
  // $eval 메서드는 주어진 표현식을 해당scope 객체에서 계산하여 결과값을 반환한다.
.controller('chart',function($scope){
    $scope.chartData1=[3,7,10,2,5,7];
    $scope.chartData2=[7,9,1,3,2,4,6,3,2,2];
  })
  .directive('ngSparkline2', [function () {
   return {
    restrict: 'EA',
    scope : {
     chartData : "="
    },
    link: function (scope, iElement, iAttrs) {
      var options = {
       type : iAttrs.chartType || 'line'
      };
     jQuery(iElement).sparkline(scope.chartData, options);
    }
   };
  }]);
// 보통 데이터는 템플릿이 아닌 컨트롤러에 작성된다.
// scope옵션 '='을 주어서 별도 $eval 메서드가 필요없다.

// 정적인 이 컴포넌트를 AngularJs의 데이터바인딩 기능과 지시자 기능으로
// 보다 쉽게 동적이며 재사용 가능한 컴포넌트로 만들 수 있다.

app.directive('ngSparkline3',[function(){
  return{
    restrict:'EA',
    scope:{
      chartData:"="
    },
    link:function(scope,iElement,iAttrs){
      var options={type:iAttrs.chartType||'line'};
      scope.$watch('chartData',function(bfData,afData){
        jQuery(iElement).sparkline(scope.chartData,options);
      },true);
    }
  };
}])
.controller('dChart',function($scope){
  $scope.chartData3=[0,0,0];
});
// scope객체의 watch메서드를 사용한 동적 컴포넌트
// watch메서드에 chartdata 표현식을 인자로 주면 해당 값이 바뀔때마다 호출

// $watch(표현식, 리스너함수, 동등성여부)
// 대상 scope에 특정 표현식을 감지하는 리스너 함수를 등록함
// 리스너함수 인자에는 새로운값과 이전값이 주어지고
// 동등성 여부인 마지막 인자가 true이기 때문에 배열 객체의 배열 요소가 바뀔떄마다
// 리스너 함수를 호출한다.
// true값을 주지 않으면 기본값인 false가 되고 이는 레퍼런스 자체가
// 바뀔떄마다 호출된다.
app.directive('ngSparkline4',[function(){
  return{
    restrict:'EA',
    scope:{
      chartData:"=",
      chartClick:"&"
    },
    link:function(scope,iElement,iAttrs){
      var options={type:iAttrs.chartType||'line'};

      scope.$watch('chartData',function(bfData,afData){
        jQuery(iElement).sparkline(scope.chartData,options);
      },true);

      jQuery(iElement).bind('sparklineClick', function(ev){
        var sparkline=ev.sparklines[0],
        region=sparkline.getCurrentRegionFields(),
        regionX=region.x,
        regionY=region.y;

        if(regionX===undefined&&region[0])regionX=region[0].offset;
        if(regionY===undefined&&region[0])regionY=region[0].value;
        // bar 타입은 x,y가 아닌 value만 반환

          scope.chartClick({x:regionX, y:regionY});
        // scope.$apply(function(){
        //   scope.chartClick({x:regionX, y:regionY});
        // });
      });
    }
  };
}])
.controller('dChart_click',function($scope){
  $scope.chartData4=[0,0,0];
  $scope.selectedData={x:null,y:null};
  $scope.handleClick=function(x,y){
    $scope.selectedData.x=x;
    $scope.selectedData.y=y;
  };
});

// 템플릿에 chart-click속성을 추가하고 handleClick(x,y) 표현식을 값으로 주었다.
// 이는 scope의 handleClick함수를 호출한다.
// handleClick함수는 단순 전달받은 x와 y갑슬 selectedData에 넣어준다.
// scope 설정에 chartClick을 "&"로 설정하여 지시자 내부 scope의 chartClick이
// dChart_click컨트롤러 scope의 handleClick을 포함하는 함수가 된다.
// 이 지시자 내부에서 link함수를 보면 jQuery를 이용하여
// 스파크라인 그래프에 sparklineClick이벤트를 추가했다.
// 이후 클릭한 그래프의 x,y값을 가져와 scope.chartClick을 실행한다.
//
// 링크함수에서 $apply 부분을 주시해서 보아야한다.
// 만약 scope.chartClick();을 &apply익명함수 안에서 호출하지 않으면

// &apply(표현식or함수)
// 주로 외부환경에서 AngularJs표현식을 실행할때 사용. 표현식은 계산해주고 함수는 실행시킨다.
// 또한 내부적으로 &rootScope의 $digest(scope내 모든 wahtch리스너함수 실행)를 실행해 등록된 모든 $watch를 실행시킴.
