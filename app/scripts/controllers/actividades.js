'use strict';

angular.module('opiAppApp')
.controller('ActividadesCtrl', function ($scope, $webSql) {
    var DB = $webSql.openDatabase('opi', '1.0', 'Test opi', 2 * 1024 * 1024); 
    $scope.insertActivity = function(actividad){
        $scope.actividad='';
        actividad.status = 0;
        DB.insert('actividades', actividad, function(results){});
    }

    DB.select("actividades",{"name":'IS NOT NULL'}, function(results){
        $scope.activiades = [];
        console.log(results);
        for(var i=0; i < results.rows.length; i++){
            $scope.activiades.push(results.rows.item(i));
        }
        $scope.$apply();
        console.log($scope.activiades);
    });
});
