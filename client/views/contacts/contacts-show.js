'use strict';

angular.module('address')
.controller('ContactsShowCtrl', function($scope, $state){
  $scope.name = $state.params.name;
  $scope.afUser.$loaded(function(){
    $scope.contact = $scope.afUser.contactList[$scope.name];
    var keys = [];
    var key;
    for(var k in $scope.contact){
      keys.push(k);
    }
    key = keys[0];
    $scope.contact = $scope.contact[key];
    $scope.photo = $scope.contact.photo;
  });
  $scope.editContact = function(contact){
    $state.go('contacts.edit', {'contact': contact.name});
    
  };

});
