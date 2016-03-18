'use strict'

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $http, $state, VacaService) {

// $scope.delete = function(vacation) {
//   console.log(vacation)
//   VacaService.delete(vacation)
//   .then(function(res) {
//     $http.get('/vacations')
//     .then(function(res) {
//       $scope.lists = res.data;
//       }, function(err) {
//         console.log('err:', err);
//       })
//   }, function(err) {
//     console.log(err);
//   })
// }

// $scope.edit = function(vacation) {
//   console.log('edit');
//   $scope.editvacation = angular.copy(vacation);
// }

// $scope.confirm = function() {
//   VacaService.edit($scope.editvacation)
//   .then(function(res) {
//     console.log("edited");
//   }, function(err) {
//     console.log(err);
//   })
// }



// $scope.cancelEdit = function(vacation) {
//   console.log('cancelEdit');
// }

//   $http.get('/vacations')
//   .then(function(res) {
//     $scope.lists = res.data;
//     }, function(err) {
//       console.log('err:', err);
//     })

  })


app.controller('vacationsCtrl', function($scope, $http, $state, VacaService) {
  VacaService.fetch()
  .then(function(res) {
    console.log(res)
  }, function(err) {
    console.log('err', err)
  })


    // $scope.post = function() {
    //   $http.post('/vacations', $scope.add)
    //     .then(function(res) {
    //       $scope.add = {};
    //         $http.get('/vacations')
    //           .then(function(res){
    //             $scope.lists = res.data;
    //           }, function(err){
    //             console.log("err:", err);
    //           });
    //     }, function(err) {
    //       console.log(err);
    //     });
    //   }
    //   $http.get('/vacations')
    //   .then(function(res) {
    // console.log('got 2', res.data);
    //     }, function(err) {
    //       console.log('err:', err);
    //     })
//       $scope.go = function(data) {
//         $state.go("questions", {
//           id: data.id
//         })
//       }
  })

app.controller('planCtrl', function($scope, $http, $stateParams) {
  // $http.get(`/vacations/${$stateParams.id}`)
  // .then(function(res) {
  //     console.log("get request to /vacations/"+$stateParams.id, "returned",  res.data[0]);
  //     $scope.data = res.data[0];
  //   }, function(err) {
  //     console.log('err:', err);
  //   })

  //   $scope.answer = function() {
  //     $scope.answer = $scope.data.answer
    // }
  })
