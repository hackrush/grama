/**
 * User service.
 *
 * @author    Team A  {@link http://hackrush.github.io}
 * @copyright Copyright (c) 2015, Team A 
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    /**
     * @ngdoc service
     * @name UserService
     * @module app.core
     * @requires Restangular
     * @description
     * Service to get the user data.
     *
     * @ngInject
     */
    function UserService(Restangular) {
        return {
            /**
             * @ngdoc method
             * @name UserService:get
             * @description
             * Retrieve user by id.
             *
             * @returns {promise} A promise which is resolved in user data.
             */
            get: function(id) {
                return Restangular
                    .one('users', id)
                    .get();
            },
            /**
             * @ngdoc method
             * @name UserService:getList
             * @description
             * Retrieve all users.
             *
             * @returns {promise} A promise which is resolved in users list data.
             */
            getList: function() {
                return Restangular
                    .all('users')
                    .getList();
            }
        };
    }

    angular
        .module('app.core')
        .factory('UserService', UserService);

})();
