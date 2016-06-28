/**
 * Layout route.
 *
 * @author    Denzel Wamburu {@link http://denzel.xyz}
 * @copyright Copyright (c) 2015, Denzel Wamburu
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name layoutRoute
     * @module app.layout
     * @requires $stateProvider
     * @description
     * Router for the layout page.
     *
     * @ngInject
     */
    function layoutRoute($stateProvider) {
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: 'js/routes/layout/side-menu.html',
                controller: 'LayoutCtrl as vm'
            })
    }

    angular
        .module('app.layout')
        .config(layoutRoute);

})();
