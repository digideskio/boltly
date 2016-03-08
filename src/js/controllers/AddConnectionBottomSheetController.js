(function(){
  'use strict';

  angular.module('app')
         .controller('BottomSheetCtrl', ($scope, $mdBottomSheet) => {

    $scope.newConnection = "";
    $scope.validURL = false;

    $scope.checkURL = () => $scope.validURL = linkify.find($scope.newConnection).length;

    $scope.createNewConnection = () => {
      let connectionObj = {
        url:$scope.newConnection,
        incomingHistory:[],
        outgoingHistory:[],
        trackedEvents:[],
        currentMsgEvent: "My Event",
        currentMsgBody: "Hello World!"
      };
      $mdBottomSheet.hide(connectionObj);
    };
  });
})();
