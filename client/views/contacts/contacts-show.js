'use strict';

angular.module('address')
.controller('ContactsShowCtrl', function($scope, $state, Contact){
  var contact = $state.params.contact;
  $scope.contact = Contact.init(contact);
  
  $scope.editContact = function(contact){
    $state.go('contacts.edit', {'contact': contact.name});
    
  };

});
