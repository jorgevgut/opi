'use strict';

angular
.module('opiAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'angular-websql'
  ])
.run(function ($rootScope,$webSql) {
  var db = $webSql.openDatabase('opi', '1.0', 'Test opi', 2 * 1024 * 1024); 
  db.dropTable('opi');
  db.createTable('actividades',{
    "id":{
      "type": "INTEGER",
      "null": "NOT NULL", 
      "primary": true,
      "auto_increment": true 
    },
    "created":{
      "type": "TIMESTAMP",
      "null": "NOT NULL",
      "default": "CURRENT_TIMESTAMP"
    }, 
    "name":{
      "type": "TEXT",
      "null": "NOT NULL"
    },
    "description":{
      "type": "TEXT",
      "null": "NOT NULL"
    },
    "municipio":{
      "type": "TEXT",
      "null": "NOT NULL"
    },
    "monto":{
      "type": "TEXT",
      "null": "NOT NULL"
    },
    "status":{
      "type": "INTEGER",
    },
  })
  db.createTable('user', {
    "id":{
      "type": "INTEGER",
      "null": "NOT NULL", 
      "primary": true,
      "auto_increment": true
    },
    "created":{
      "type": "TIMESTAMP",
      "null": "NOT NULL",
      "default": "CURRENT_TIMESTAMP" 
    },
    "username":{
      "type": "TEXT",
      "null": "NOT NULL"
    },
    "password": {
      "type": "TEXT",
      "null": "NOT NULL"
    },
    "type": {
      "type": "INTEGER"
    }
  })
})
.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/actividades', {
    templateUrl: 'views/actividades.html',
    controller: 'ActividadesCtrl'
  })
  .when('/add-actividad', {
    templateUrl: 'views/add-actividad.html',
    controller: 'ActividadesCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
  // $locationProvider.html5Mode(true);
});