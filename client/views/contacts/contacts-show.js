'use strict';

angular.module('address')
.controller('ContactsShowCtrl', function($scope, $state, Contact){
  var contact = $state.params.contact;//this line pulls the information provided to the ui-router, and makes it accessable locally
  $scope.contact = Contact.init(contact);//$scope is the call to make it visible/available to the DOM

  $scope.editContact = function(contact){
    $state.go('contacts.edit', {'contact': contact.$id});//$id is a unique value added by firebase
  };//whenever an object or array is added to the database. It is very useful in tracking and calling
});//upon the contents of that array or object
