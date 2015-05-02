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

/*this factory does the heavy lifting of individual contacts
within firebase. As in, this factory talks to firebase and any controllers
that use it as a dependency. It does not, however, talk to the DOM/view,
that task is left to the controllers alone*/
