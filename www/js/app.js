/**
 * Main app module.
 *
 * @author    Denzel Wamburu {@link http://denzel.xyz}
 * @copyright Copyright (c) 2015, Denzel Wamburu
 * @license   The MIT License {@link http://opensource.org/licenses/MIT}
 */
(function () {
    'use strict';

    angular.module('app', [
        // angular modules
        'ngAnimate',
        'ngSanitize',
        'ngMessages',
        //'ngMaterial',

        // 3rd party modules
        'ui.router',
        'ionic',
        'restangular',
        'LocalStorageModule',
        'ngCordova',

        // app modules
        'app.core',
        'app.layout',
        'app.signup',
        'app.signin',
        'app.user',
        'app.users',
        'app.gallery',
        'app.galleries'
    ]);

})();
