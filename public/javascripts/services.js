'use strict'

var app = angular.module('myApp');

app.service('VacaService', function($http) {

  this.fetch = function() {
    return $http.get('/vacations')
  }


  this.create = function(newData) {
      return $http.post('/vacations', newData)
  }

  this.edit = function(vaca) {
    return $http.put(`/vacations/${vaca.id}`, vaca);
  }

  this.delete = function(vaca) {
    console.log(vaca);
    return $http.delete(`/vacations/${vaca.id}`);
  }
});