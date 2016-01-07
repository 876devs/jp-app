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
            });
    }

})();
