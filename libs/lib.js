/**
 * Created by tremaine on 1/13/16.
 */
(function(){
    /**
     * Builds query object from list of url query parameters.
     * @param queryList
     * @returns {{}}
     */
    exports.buildQuery = function(queryList){
        var name = queryList.name.split(" "),
            query = {};
        switch(name.length){
            case 1: query.first_name = new RegExp(name[0].toLowerCase(), 'i');
                break;
            case 2: query.first_name = new RegExp(name[0].toLowerCase(), 'i');
                query.last_name = new RegExp(name[1].toLowerCase(), 'i');
                break;
        }

        if(queryList.parish){
            if(queryList.parish != "blank"){
                query.parish = new RegExp(queryList.parish, 'i');
            }
        }
        //comment
        //another comment
        return query;
    };

})();