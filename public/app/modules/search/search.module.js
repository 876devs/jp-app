/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('search', [])
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'app/modules/search/search.html',
                controller: 'Search',
                controllerAs: 'vm'
            });
    }


})();