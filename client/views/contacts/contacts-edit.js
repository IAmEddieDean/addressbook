'use strict';

angular.module('address')
.controller('ContactsEditCtrl', function($scope, $state){
  $scope.name = $state.params.name;
  console.log('balls', $state.params);
  $scope.afUser.$loaded(function(){
    var keys = [];
    var key;
    for(var k in $scope.contact){
      keys.push(k);
    }
    key = keys[1];
    $scope.contact = $scope.contact[key];
    $scope.photo = $scope.contact.photo;
    });
  console.log('tits', $scope.contact);
  $scope.editContact = function(){
  $scope.contact = $scope.afUser.contactList[$scope.name];
  };
});
