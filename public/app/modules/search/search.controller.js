/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('search')
        .controller('Search', Search);
    Search.$inject = ['$routeParams', 'searchService', '$location'];

    function Search($routeParams, searchService, $location){
        var vm = this;
        vm.q = $routeParams.q;
        vm.queryString = $routeParams.q;

        vm.search = function(){
            $location.url('/search?q=' + vm.q);
            searchService.search(vm.q);
        };
        //console.log($routeParams.q);
    }

})();


