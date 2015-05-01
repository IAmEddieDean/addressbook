'use strict';
angular.module('address')
.factory('Contact', function($rootScope, $firebaseObject){
  
  var fbContact;
  var afContact;
  
  function Contact(){
  }
  
  Contact.init = function(contact){
    fbContact = $rootScope.fbUser.child('/contactList/' + contact);
    afContact = $firebaseObject(fbContact);
    return afContact;
  };
  Contact.edit = function(contact){
    afContact.$save(contact);
  };

  return Contact;
});
