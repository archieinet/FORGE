﻿(function () {
    'use strict';

    angular
        .module('forge-app',
        ['ui.router',
            'ngAnimate',
            'ngSanitize',
            'ui.bootstrap',
            'app_signin',
            'app_router',
            'app_service',
            'app_serviceEndpoint',
            'app_auth',
            'app_leftMenuComponent',
            'app_topRightMenuComponent',
            'app_heirarchy',
            'app_content_management',
            'app_promotionComponent']);
    
})();