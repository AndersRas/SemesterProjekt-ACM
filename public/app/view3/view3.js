'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {
    $http({
      method: 'GET',
      url: 'adminApi/user' //getStudents
    }).
      success(function (data, status, headers, config) {
        $scope.users = data;
         $scope.error = null;
      }).
      error(function (data, status, headers, config) {
        if(status == 401){
          $scope.error ="You are not authenticated to request these data";
            return;
        }
        $scope.error = data;
      });

      $scope.getClass = function(classId) { //getClass == getStudentsByClass

        $http({
          method: 'GET',
          url: 'adminApi/getClass/'+ classId //adminApi/getStudentsByClass/
        }).
            success(function (data, status, header, config) {
              $scope.newStudent = data; //foundstudents
              for(var i in data){
                $scope.getStudyPoints(data[i]._id) //getStudyPointByStudentId
              }

              $scope.error = null;
            }).
            error(function (data, status, headers, config) {
              if (status == 401) {
                $scope.error = "You are not authenticated to request these data";
                return;
              }
              $scope.error = data;

            });
        $http({
          method: 'GET',
          url: 'adminApi/getStudent/+username'
        }).
            success(function(data, status, header, config){
              $scope.newStudent = data;
              $scope.error = null;
            }).
            error(function (data, status, headers, config) {
              if (status == 401) {
                $scope.error = "You are not authenticated to request these data";
                return;
              }
              $scope.error = data;
            });
        $http({
          method: 'GET',
          url: 'adminApi/classes'
        }).
            success(function (data, status, headers, config) {
              $scope.foundClasses = data;
              $scope.error = null;
            }).
            error(function (data, status, headers, config) {
              if (status == 401) {
                $scope.error = "You are not authenticated to request these data";
                return;
              }
              $scope.error = data;

            });
        $scope.getPeriod = function(getPeriod) { //periodNumber
          $http({
            method: 'GET',
            url: 'adminApi/getPeriod/' + getPeriod

          }).
              success(function (data, status, headers, config) {
                $scope.newPeriod = data; //foundPeriod
                $scope.error = null;
              }).
              error(function (data, status, headers, config) {
                if (status == 401) {
                  $scope.error = "You are not authenticated to request these data";
                  return;
                }
                $scope.error = data;

              });
          $http({
            method: 'GET',
            url: 'adminApi/newPeriod' //getPeriods
          }).success(function (data, status, headers, config) {
            $scope.getPeriods = data;
            $scope.error = null;
          }).error(function (data, status, headers, config) {
            if (status == 401) {
              $scope.error = "You are not authenticated to request these data";
              return;
            }
            $scope.error = data;

          });
          $http({
            method: 'GET',
            url: 'adminApi/Tasks'
          }).success(function (data, status, headers, config) {
            $scope.newTask = data; //foundTasks
            $scope.error = null;
          }).error(function (data, status, headers, config) {
            if (status == 401) {
              $scope.error = "You are not authenticated to request these data";
              return;
            }
            $scope.error = data;

          });
          $scope.foundPoints = []; //foundPointsByStudent
          $scope.studyPointsId = function (studentId) { //getStudyPointByStudentId

            $http({
              method: 'GET',
              url: 'adminApi/studyPointsId/' + studentId
            }).
                success(function (data, status, headers, config) {
                  $scope.foundPoints.push(data);
                  $scope.error = null;
                }).
                error(function (data, status, headers, config) {
                  if (status == 401) {
                    $scope.error = "You are not authenticated to request these data";
                    return;
                  }
                  $scope.error = data;

                });

          }
        }



      }


});



