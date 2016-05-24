angular.module('app', [])
.controller("AppController", ["$scope", "$http", function($scope, $http) {

	var words = [];
	var newID = ''


	$scope.previousIDs = [];
	$scope.generatedID = 'generate-id';

	$scope.generateID = function() {
		$http.get('assets/data/words.json').success(function(data){
	        words = data;
	        var number1 = Math.floor(Math.random() * (words.length-1))
	        var number2 = Math.floor(Math.random() * (words.length-1))
	        var word1 = words[number1].word;
	        var word2 = words[number2].word;
	        newID = word1+'-'+word2;
	        checkPrevious(newID);
	    });
	};

	var checkPrevious = function(newID) {
		if($scope.previousIDs.indexOf(newID) !== -1) {
 			$scope.generateID();
		} else {
			$scope.generatedID = newID;
			$scope.previousIDs.push(newID);
		}
	};

}]);