'use strict';

angular.module('address')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('about', {url: '/about', templateUrl: '/views/general/about.html'})
  .state('faq', {url: '/faq', templateUrl: '/views/general/faq.html'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('contacts', {url: '/contacts', templateUrl: '/views/contacts/contacts.html', abstract: true})
  .state('contacts.new', {url: '/new', templateUrl: '/views/contacts/contacts-new.html', controller: 'ContactsNewCtrl'})
  .state('contacts.list', {url: '', templateUrl: '/views/contacts/contacts-list.html', controller: 'ContactsListCtrl'})
  .state('contacts.show', {url: '/{contact}', templateUrl: '/views/contacts/contacts-show.html', controller: 'ContactsShowCtrl'})
  .state('contacts.edit', {url: '/edit/{contact}', templateUrl: '/views/contacts/contacts-edit.html', controller: 'ContactsEditCtrl'});

});
