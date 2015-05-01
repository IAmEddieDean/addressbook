'use strict';

angular.module('address')
.controller('ContactsListCtrl', function($scope, $state, $rootScope, Contact, ContactList){
  $scope.contacts = ContactList.init();
  
  $scope.addNewContact = function(){
    $state.go('contacts.new');
  };
  $scope.showContact = function(contact){
    $state.go('contacts.show', {'contact': contact.$id});
  };
  $scope.deleteContact = function(contact){
    ContactList.deleteContact(contact);
  };

});
