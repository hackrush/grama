/**
 * Users controller.
 *
 * @author    Denzel Wamburu {@link http://denzel.xyz}
 * @copyright Copyright (c) 2015, Denzel Wamburu
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    /**
     * @ngdoc controller
     * @name UsersCtrl
     * @module app.users
     * @requires users
     * @description
     * Controller for the users page.
     *
     * @ngInject
     */
    function UsersCtrl(users) {
        var vm = this;
        vm.users = users;
    }

    angular
        .module('app.users')
        .controller('UsersCtrl', UsersCtrl);
})();
