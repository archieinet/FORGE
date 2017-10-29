(function() {
    'use strict';

    function controller($log) {
        var hc = this;
        hc.isCollapsed = true;
        



        //$log.info('heirachy connected');
    }; //controller;

    angular
        .module('app_heirarchy', [])
        .component('heirarchyComponent', {
            templateUrl: 'apps/views/heirarchy-component.html',
            controller: ['$log', controller],
            controllerAs: 'hc'
        });

})();