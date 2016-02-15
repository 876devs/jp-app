/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('home', [
            'ngRoute'
        ]).config(config);

    function config($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl: 'app/modules/home/home.html',
                controller: 'Home',
                controllerAs: 'vm'                
            }).when('/privacy-policy', {
                templateUrl: 'app/modules/home/about.html',
                controller: 'Home',
                controllerAs: 'vm'
            }).when('/terms',{
               templateUrl: 'app/modules/home/terms.html',
                controller: 'Home',
                controllerAs: 'vm'
            }).when('/privacy-policy',{
                templateUrl: 'app/modules/home/privacy.html',
                controller: 'Home',
                controllerAs: 'vm'
            });
    }

})();
