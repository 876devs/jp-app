/**
 * Created by tremaine on 1/6/16.
 */
(function () {
    angular
        .module('search')
        .controller('Search', Search);

    Search.$inject = ['$routeParams', 'parishService', 'dataService'];

    function Search($routeParams, parishService, dataService){
        var vm = this;
        vm.query = {};
        vm.parishes = parishService.getParishes();
        vm.query.name = $routeParams.name;
        vm.query.parish = parishService.search({"value": $routeParams.parish});
        vm.jp_name = $routeParams.name.replace("+", " ");
        vm.enterKeySearch = enterKeySearch;

        _search();

        vm.search = function(){
            if(vm.query.name){
                _search();
            }
        };

        function _search(){
            var q = _buildQuery(vm.query.name, vm.query.parish);
            return dataService.search(q).then(function(data){
                vm.results = data;
                vm.jp_name = q.name.replace("+", " ");
                return vm.results;
            });
        }

        function _buildQuery(name, parish){
            var query = {};
            if(name){
                query.name = name.trim().replace(" ", "+");
            }
            if(parish.value){
                query.parish = parish.value.trim().replace(" ", "+");
            }
            return query;
        }

        function enterKeySearch(keyEvent){
            if(keyEvent.which === 13){
                _search();
            }
        }
    }

})();


