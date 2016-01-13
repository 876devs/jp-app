/**
 * Created by tremaine on 1/6/16.
 */
(function(){
    angular
        .module('data',[])
        .factory('dataService', dataService);

    dataService.$inject = ['$http'];

    function dataService($http){
        var service = {
            search: search
        };

        return service;

        function search(q){
            var params = '?name=' + q.name + '&parish=' + q.parish,
                url = '/api/search' + params;
            return $http.get(url)
                .then(success)
                .catch(failed);

            function success(response){
                return response.data;
            }

            function failed(error){
                console.log('Error', error.data);
            }
        }
    }

})();