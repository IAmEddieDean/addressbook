'use strict';
angular.module('address')
.factory('Contact', function($rootScope, $firebaseArray, $firebaseObject){
  
  function Contact(){
  }
  Contact.rmv = function(name, index){
    var fbContact = $rootScope.fbUser.child('contactList/' + name);
    var afContact = $firebaseArray(fbContact);
    // var names = $rootScope.afUser.names ? $rootScope.afUser.names.split(',') : [];
    // names.splice(index,1);
    // $rootScope.afUser.names = names.join(',');
    
    $rootScope.afContact.$remove();
  };
  Contact.addName = function(name){
    var names = $rootScope.afUser.names ? $rootScope.afUser.names.split(',') : [];
    names.push(name);
    $rootScope.afUser.names = names.join(',');
    return $rootScope.afUser.$save();
  };
  Contact.addContact = function(contact){
    var c = angular.copy(contact);
    c.birthday = c.birthday.getTime();
    var fbContact = $rootScope.fbUser.child('contactList/' + c.name);
    var afContact = $firebaseArray(fbContact);
    afContact.$loaded().then(function(){
      return afContact.$add(c);
    });
  };
  return Contact;
});
