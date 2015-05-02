'use strict';

angular.module('address')
.controller('ContactsListCtrl', function($scope, $state, $rootScope, Contact, ContactList){
  $scope.contacts = ContactList.init();//this function call initializes the list of contacts from firebase everytime this controller gets called.
  //this is required in this schema, due to the asynchronous nature of updating the DOM from firebase.
  
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
