'use strict';

angular.module('bridgesfApp')
  .controller('EventsCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/art.json')
    .then(function(res){
		$scope.art = res.data.art;

		console.log('**** scope art ', $scope.art);
    });

    console.log('events controllers');
  }]);
