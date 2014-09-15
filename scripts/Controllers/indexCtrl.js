define(function (require) {
    var angular = require('angular');
    var app = angular.module("indexController", []);

    app.controller('indexCtrl', ["$scope", "$interval", function ($scope, $interval) {
        $scope.datas = [
            {"img": "images/1.jpg"},
            {"img": "images/2.jpg"},
            {"img": "images/4.jpg"},
            {"img": "images/5.jpg"},
            {"img": "images/6.jpg"},
            {"img": "images/7.jpg"}
        ];

        $interval(function () {
            var datas = $scope.datas;
            var data = datas.shift();
            datas.push(data);
            $scope.datas = datas;

        }, 2000);

        $scope.loginClick = function () {

        }
    }]);
    return app;
});