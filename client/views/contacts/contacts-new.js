'use strict';

angular.module('address')
.controller('ContactsNewCtrl', function($scope, Contact){
  $scope.newContact = function(contact){
    previewFile ();
    
    function previewFile () {
      var preview = document.querySelector('img');
      var file    = document.querySelector('input[type=file]').files[0];
      var reader  = new FileReader();
      
      reader.onloadend = function () {
        preview.src = reader.result;
        contact.photo = reader.result;
        Contact.addContact(contact);
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = '';
      }
    }
  };
});
