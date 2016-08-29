var app = angular.module('weatherApp', ['angular-loading-bar']);

app.controller('weatherControl', function($http,$scope){
    $scope.items = {};
    $scope.assetName = '';
    $scope.totalCount = 0;
    $scope.searchWeather = function(){
        var searchTerm = $scope.assetName;
		var url= 'http://api.openweathermap.org/data/2.5/forecast?id=3220838&lang=de&mode=json&appid=73136fa514890c15bc4534e7b8a1c0c4&units=metric';
	//var url = 'http://api.openweathermap.org/data/2.5/find?q='+searchTerm+'&type=like&sort=population&cnt=30&units=metric&APPID=73136fa514890c15bc4534e7b8a1c0c4';
		$http.get(url).success(function(data){
			$scope.city = data.city;	
			$scope.items = data.list;
        });
    };
});
