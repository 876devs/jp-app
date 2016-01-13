/**
 * Created by tremaine on 1/13/16.
 */
(function(){

    exports.buildQuery = function(queryList){
        var name = queryList.name.split(" "),
            query = {};
        switch(name.length){
            case 1: query.first_name = name[0].toLowerCase();
                break;
            case 2: query.first_name = name[0].toLowerCase();
                query.last_name = name[1].toLowerCase();
                break;
        }

        if(queryList.parish){
            if(queryList.parish != "blank"){
                query.parish = queryList.parish;
            }
        }

        return query;
    }

})();