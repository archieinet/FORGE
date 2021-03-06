﻿(function () {

    'use strict';

    var controller = function ($state, serviceEndpoint) {
        var vm = this;
        vm.loading = false;


        vm.login = function () {
            var _u = vm.username.trim() + ':' + vm.password;
            vm.loading = true;

            serviceEndpoint
                    .authentication(btoa(_u))
                    .then(function (resp) {
                        if (!resp.status) {
                            vm.error = resp.statusText;
                            return false;
                        }

                        $state.go(sessionStorage._toState || 'dashboard');
                    })
                    .catch(function (resp) {
                        vm.error = resp;
                    })
                    .finally(function () {
                        vm.loading = false;
                    })
            ; //srvendpoing

        };
    };

    controller.$inject = [ '$state', 'serviceEndpoint'];


    angular
    .module('app_signin', [])
    .component('signIn', {
        templateUrl: 'apps/views/sign-in-component.html',
        controller: controller,
        controllerAs: 'vm',
         
    })
    ;//module
})();