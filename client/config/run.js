'use strict';

angular.module('address')
.run(function($rootScope, $window, $firebaseAuth, firebaseUrl){
  $rootScope.fbRoot = new $window.Firebase(firebaseUrl);
  $rootScope.afAuth = $firebaseAuth($rootScope.fbRoot);
});
//this .run function establishes the parameters and names for the firebase schema, as well as the parameters for the authorization
