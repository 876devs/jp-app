/**
 * Created by tremaine on 1/13/16.
 */
(function(){

    var KEYS = ['first_name', 'last_name', 'middle_name'];
    /**
     * Builds an or query
     * @param list
     * @returns {Array}
     */
    function buildOr(list){
        var i = KEYS.length,
            arr = [];
        while(i--){
            var query = {};
            query[KEYS[i]] = {$in: list};
            arr.push(query);
        }
        return arr;
    }

    function buildReqExp(term){
        return new RegExp(term, 'i');
    }
    /**
     * Builds query object from list of url query parameters.
     * @param queryList
     * @returns {{}}
     */
    exports.buildQuery = function(queryList){
        var list = queryList.name.split(" "),
            query = {};
            query = buildOr(list);
        if(queryList.parish){
            if(queryList.parish != "blank"){
                query.parish = new RegExp(queryList.parish, 'i');
            }
        }
        return query;
    };
})();