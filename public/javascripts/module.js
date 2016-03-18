'use strict'

var app = angular.module('myApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/html/home.html',
    controller: "mainCtrl"
  })
  .state('vacations', {
    url: '/vacations',
    templateUrl: '/html/vacations.html',
    controller: 'vacationsCtrl'
  })
  .state('plan', {
    url: '/plan/:id',
    templateUrl: '/html/plan.html',
    controller: 'planCtrl'
  })


  $urlRouterProvider.otherwise('/');
})