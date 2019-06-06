import './style.css';
import angular from 'angular';
//import ngRoute from 'angular-route'

//var app = angular.module('myApp', [ngRoute]);
var app = angular.module('myApp', []);

app.controller('participanteController', function ($scope, $location, $http) {

  $scope.participantes = [{nome:'Proponente'}, {nome:'Avalista 1'}, {nome:'Avalista 2'}, {nome:'Avalista 3'}, {nome:'Avalista 4'}]
    
  $scope.acrescentarAvalista = function() {
    
    $scope.participantes.push({nome:'Avalista ' + $scope.participantes.length} )
    
  }

});
