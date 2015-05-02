'use strict';
angular.module('address')
.factory('ContactList', function($rootScope, $firebaseArray){
  
  var fbContactList;
  var afContactList;
  
  function ContactList(){}
  
  ContactList.init = function(){//<--this is an example of a static function method, this is different from the .prototype method
    fbContactList = $rootScope.fbUser.child('/contactList');//in that it is only applied to a newly constructed object if called.
    afContactList = $firebaseArray(fbContactList);//this particular static method is required to populate the DOM with the contacts
    return afContactList;//pulled from firebase, as explained in contacts-list.js
  };
  
  ContactList.addContact = function(contact){
    afContactList.$add(contact);//$add is the method for adding an item to a firebase array
  };
  ContactList.deleteContact = function(contact){
    afContactList.$remove(contact);//$remove is the method for removing an item from a firebase array
  };
  return ContactList;
});
/*this factory does the heavy lifting of the contactList array
within firebase. As in, this factory talks to firebase and any controllers
that use it as a dependency. It does not, however, talk to the DOM/view,
that task is left to the controllers alone*/
