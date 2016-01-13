/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('search', [])
        .filter('capitalize', capitalize)
        .config(config);


    function config($routeProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'app/modules/search/search.html',
                controller: 'Search',
                controllerAs: 'vm'
            });
    }

    function capitalize(){
        return function(str) {
            return str.split(" ").map(function(input){return (!!input) ? input.charAt(0).toUpperCase()
            + input.substr(1).toLowerCase() :''}).join(" ");
        }
    }



})();