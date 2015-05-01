'use strict';

angular.module('address')
.controller('ContactsEditCtrl', function($scope, $state, Contact){
  
  var contact = $state.params.contact;
  $scope.contact = Contact.init(contact);
  $scope.contact.birthday = new Date($scope.contact.birthday);
  
  $scope.saveEdit = function(contact){
    Contact.edit(contact);
    $state.go('contacts.list');
    
  };

});
