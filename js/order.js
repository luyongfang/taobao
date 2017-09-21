/**
 * Created by Administrator on 2017/9/18.
 */
var mk = angular.module('myApp',['ngRoute']);
mk.controller('sjxr',['$scope',function($scope){

}]);
mk.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/a',{
        templateUrl:"./order-luyou/quanbu.html"
    }).when('/b',{
        templateUrl:"./order-luyou/daifu.html"
    }).when('/c',{
        templateUrl:"./order-luyou/daifa.html"
    }).when('/d',{
        templateUrl:"./order-luyou/daishou.html"
    }).when('/e',{
        templateUrl:"./order-luyou/daiping.html"
    }).otherwise({redirectTo:"/a"});
}]);