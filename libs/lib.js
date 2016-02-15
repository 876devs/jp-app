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
        var query = {},
            list;
        list = splitQuery(queryList);
        query = buildOr(list);
        if(queryList.parish){
            if(queryList.parish != "blank"){
                query.parish = new RegExp(queryList.parish, 'i');
            }
        }
        return query;
    };

    function splitQuery(list){
        return list.name.split(" ");
    }
    /**
     * Assigns a relevance to an object
     * matching query parameters
     * @param result
     * @param queryList
     * @returns {*}
     */
    exports.sortResult = function(result, queryList){
        var i = result.length;
        var list = splitQuery(queryList);
        if(list.length === 2){
            while(i--){
                if(result[i].first_name === list[0] && result[i].last_name === list[1]){
                    result[i].relevance = 1;
                }else if(result[i].first_name === list[1] && result[i].last_name === list[0]){
                    result[i].relevance = 1;
                }
            }
        }
        return result;
    }
})();