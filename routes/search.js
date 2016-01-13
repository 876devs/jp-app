/**
 * Created by tremaine on 1/7/16.
 */
(function(){
    var express = require('express'),
        _ = require('underscore'),
        router = express.Router(),
        JP = require('../models/jp'),
        lib = require('./lib');
    /**
     * Attempts to search database for a JP
     */
    router.get('/search', function(req, res){
        if(!_.isEmpty(req.query)){
            var query = lib.buildQuery(req.query);
            JP.find(query).exec(function(err, list){
                res.json(list);
            });
        }else{
            res.json({message: "Invalid number of parameters sent"});
        }
    });

    module.exports = router;

})();
