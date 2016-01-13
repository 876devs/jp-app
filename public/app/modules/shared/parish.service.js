/**
 * Created by tremaine on 1/12/16.
 */
(function(){
    angular
        .module('parish',[])
        .factory('parishService',parishService);

    parishService.$inject = ['_'];

    function parishService(_){
        var _parishes = [
            {"name": "Select Parish", "value" : "blank"},
            { "name": "Kingston", "value" : "Kingston"},
            { "name": "St Andrew","value" : "Saint Andrew"},
            { "name": "St Catherine","value" : "Saint Catherine"},
            { "name": "St Thomas","value" : "Saint Thomas"},
            { "name": "Portland","value" : "Portland"},
            { "name": "St Mary", "value" : "Saint Mary"},
            { "name": "St Ann", "value" : "Saint Ann"},
            { "name": "Manchester", "value" : "Manchester"},
            { "name": "Clarendon", "value" : "Clarendon"},
            { "name": "St Elizabeth", "value" : "Saint Elizabeth"},
            { "name": "Hanover", "value" : "Hanover"},
            { "name": "Westmoreland", "value" : "Westmoreland"},
            { "name": "Trelawny", "value" : "Trelawny"},
            { "name": "St James", "value" : "Saint James"}];

        var service = {
            getParishes: getParishes,
            search: search
        };

        return service;

        function getParishes(){
            return _parishes;
        }

        function search(obj){
            return _.findWhere(_parishes, obj)
        }

    }

})();
