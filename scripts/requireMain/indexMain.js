/**
 * Created by ylh on 2014/6/30.
 */

require.config({
    baseUrl: '.',
    paths: {
        'angular': 'scripts/1.3.0/angular',
        'domReady': 'scripts/requireMain/domReady'
    },
    shim: {

        'angular': {
            exports: "angular"
        }
    }
});

    require([
            'angular',
            'domReady',
            'scripts/App/indexApp',
            'scripts/Controllers/indexCtrl'
        ],
        function (angular, domReady) {
            //app.init();
            'use strict';

            domReady(function () {
                angular.bootstrap(document, ['indexApp']);

                // The following is required if you want AngularJS Scenario tests to work
               // $('html').addClass('ng-app: clothInfoApp');
            });
        });
