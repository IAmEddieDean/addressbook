'use strict';

angular.module('address')
.factory('User', function($rootScope){

  function User(){
  }
  User.oauth = function(provider){
    return $rootScope.afAuth.$authWithOAuthPopup(provider);
  };
  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };
  

  return User;
});
/*this factory talks to firebase about the state of user authorization.
it takes and passes information to/from the nav controller*/
