'use strict';

/**
 * @ngdoc function
 * @name arnonApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the arnonApp
 */
angular.module('arnonApp')
    .controller('MapsCtrl', ['$scope', '$http','$sce','$rootScope', 'Lightbox', 
        function($scope, $http, $sce, $rootScope, Lightbox) {

            $http.get('names.json').success(function(data) {
                $scope.dataSet = data.trees;

            });
            
            
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
              }   
            
            $scope.title = 'Bi-Clustering Results';
            
            $scope.changeTitle = function(name) {
                $scope.title = name;
            }
            
            $scope.columnHeader1 = 'Name';
            $scope.columnHeader2 = 'Tree';
            
            $scope.changeColumnsHeader = function(h1, h2) {
                $scope.columnHeader1 = h1;
                $scope.columnHeader2 = h2;
            }
            
            $rootScope.glob = 1;
            
            $scope.setGlobalVar = function(value) {
            	$rootScope.glob = value;
            }
            

            
           
    
    }
    ]);





