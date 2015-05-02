'use strict';

angular.module('address')
.controller('NavCtrl', function($rootScope, $scope, $state, $firebaseObject, User){

  $scope.afAuth.$onAuth(function(data){//in this type of schema, the NavCtrl is responsible for
    if(data){//user authorization do to it being present on every part of the DOM, making the information
      $rootScope.activeUser = data;//it contains universally accessible by placing it in $rootScope
      $rootScope.displayName = getDisplayName(data);
      $rootScope.fbUser = $rootScope.fbRoot.child('users/' + data.uid);//this line establishes the user within firebase
      $rootScope.afUser = $firebaseObject($rootScope.fbUser);//making it possible to add values and information to it.
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $rootScope.fbUser = null;
      $rootScope.afUser = null;
    }
    $state.go('home');
  });

  $scope.logout = function(){
    User.logout();
  };

  function getDisplayName(data){
    switch(data.provider){
      case 'password':
        return data.password.email;
      case 'twitter':
        return data.twitter.displayName;
      case 'github':
        return data.github.displayName;
      case 'google':
        return data.google.displayName;
      case 'facebook':
        return data.facebook.displayName;
      }
    }
  });
