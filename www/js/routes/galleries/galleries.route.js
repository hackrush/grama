/**
 * Galleries route.
 *
 * @author    Denzel Wamburu {@link http://denzel.xyz}
 * @copyright Copyright (c) 2015, Denzel Wamburu
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    /**
     * @ngdoc object
     * @name galleriesRoute
     * @module app.galleries
     * @requires $stateProvider
     * @description
     * Router for the galleries page.
     *
     * @ngInject
     */
    function galleriesRoute($stateProvider) {
        $stateProvider
            .state('app.galleries', {
                url: '/galleries',
                views: {
                    'menuContent': {
                        templateUrl: 'js/routes/galleries/galleries.html',
                        controller: 'GalleriesCtrl as vm'
                    }
                },
                resolve: {/* @ngInject */
                    users: function(UserService){
                        return UserService.getList();
                    }
                },
                data: {
                    authenticate: true
                }
            });
    }

    angular
        .module('app.galleries')
        .config(galleriesRoute);

})();
