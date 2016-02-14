/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('jp', [
            'home',
            'search',
            'shared-services',
            'underscore'
        ]).config(config).run(googleAnalyticsTracking);
    /**
     * Provides application with
     * 'clean' urls
     * @param $locationProvider
     */
    function config($locationProvider){
        $locationProvider.html5Mode(true);
    }
    /**
     * Tracks each page view through
     * google analytics.
     * @param $rootScope
     * @param $location
     * @param $window
     */
    function googleAnalyticsTracking($rootScope, $location, $window){
        $rootScope.$on('$routeChangeStart', function(event, current){
            var pageName = $location.path();
            $window.ga('send', 'pageview', {'page': pageName});
        });
    }
})();

