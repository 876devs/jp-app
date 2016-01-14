/**
 * Created by tremaine on 1/13/16.
 */
(function(){

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
        return query;
    };

})();