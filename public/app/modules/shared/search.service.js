/**
 * Created by tremaine on 1/6/16.
 */
(function(){
    angular
        .module('shared-services',[])
        .factory('searchService', searchService);

    searchService.$inject = ['$http'];

    function searchService($http){
        var service = {
           search: search
        };

        return service;

        function search(query){
            console.log(query);
        }
    }

})();
