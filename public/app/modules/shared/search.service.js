/**
 * Created by tremaine on 1/12/16.
 */
(function(){
    angular
        .module('shared-services')
        .factory('testService', testService);

    testService.$inject = ['$http'];

    function testService($http){
        var service = {
            search: search
        };

        return service;

        function search(query){
            console.log(query);
        }
    }

})();
