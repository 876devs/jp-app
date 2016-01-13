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
        vm.parishes = parishService.getParishes();
        vm.query.parish = vm.parishes[0];
        vm.search = function(){
            if(vm.query.name){
                $location.url('/search?name=' + vm.query.name + '&parish=' + vm.query.parish.value);
            }
        }

    }

})();