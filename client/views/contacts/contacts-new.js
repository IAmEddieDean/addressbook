'use strict';

angular.module('address')
.controller('ContactsNewCtrl', function($scope, ContactList, $state){
  $scope.newContact = function(contact){
    ContactList.init();
    previewFile ();
    
    function previewFile () {//<--this function converts an image file into a base64 string.
      var preview = document.querySelector('img');//this string can be converted back to an
      var file    = document.querySelector('input[type=file]').files[0];//image using ng-src
      var reader  = new FileReader();
      
      reader.onloadend = function () {
        preview.src = reader.result;
        contact.photo = reader.result;
        ContactList.addContact(contact);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = '';
      }
    }
    $state.go('contacts.list');
  };
});
