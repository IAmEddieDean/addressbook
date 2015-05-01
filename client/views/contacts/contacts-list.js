'use strict';

angular.module('address')
.controller('ContactsListCtrl', function($scope, $state, $rootScope, Contact){
  $scope.addNewContact = function(){
    $state.go('contacts.new');
  };
  $scope.afUser.$loaded(function(){
    
    // $scope.names = $scope.afUser.names ? $scope.afUser.names.split(',') : [];
  });
  $scope.rmv = function(name, index){
    Contact.rmv(name, index);
  };
});
