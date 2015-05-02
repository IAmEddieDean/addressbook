'use strict';

angular.module('address')
.controller('ContactsEditCtrl', function($scope, $state, Contact){
  
  var contact = $state.params.contact;
  $scope.contact = Contact.init(contact);
  $scope.contact.birthday = new Date($scope.contact.birthday);//firebase cannot store dates in human readable forms
  //all time information must be converted to Unix time, and reverted if it is to be used on the DOM
  $scope.saveEdit = function(contact){
    Contact.edit(contact);
    $state.go('contacts.list');
    
  };

});
//this
