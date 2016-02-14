/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('home')
        .controller('Home', Home);

    Home.$inject = ['parishService','$location'];

    function Home(parishService, $location){
       var vm = this;
           vm.query = {};
           vm.enterKeySearch = enterKeySearch;

        _activate();

        function _activate(){
            vm.parishes = parishService.getParishes();
            vm.query.parish = vm.parishes[0];
        }

        vm.search = function(){
            _search();
        };

        function enterKeySearch(keyEvent){
            if(keyEvent.which === 13){
                _search();
            }
        }

        function _search(){
            if(vm.query.name){
                $location.url('/search?name=' + vm.query.name + '&parish=' + vm.query.parish.value);
            }
        }

    }

})();