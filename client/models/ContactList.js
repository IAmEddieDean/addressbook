'use strict';
angular.module('address')
.factory('ContactList', function($rootScope, $firebaseArray){
  
  var fbContactList;
  var afContactList;
  
  function ContactList(){}
  
  ContactList.init = function(){
    fbContactList = $rootScope.fbUser.child('/contactList');
    afContactList = $firebaseArray(fbContactList);
    return afContactList;
  };
  
  ContactList.addContact = function(contact){
    afContactList.$add(contact);
  };
  ContactList.deleteContact = function(contact){
    afContactList.$remove(contact);
  };
  return ContactList;
});
