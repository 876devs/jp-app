/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('home')
        .controller('Home', Home);
    Home.$inject = ['searchService', '$location'];

    function Home(searchService, $location){
       var vm = this;
           vm.name = "";
        vm.search = function(){
            $location.url('/search?q=' + vm.name);
            searchService.search(vm.name);
        }

    }

})();