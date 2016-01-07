/**
 * Created by tremaine on 1/7/16.
 */
var express = require('express'),
    router = express.Router(),
    JP = require('../models/jp');

router.get('/search', function(req, res){
   if(req.query.name){
       var separator = "\\+";
       var t = req.query.name.replace("+", " ");
       var q = t.split(" ");
        if(q.length === 2){
            JP.find({'first_name': q[0].toLowerCase(), 'last_name' : q[1].toLowerCase() }).exec(function(err, list){
               res.json(list);
            });
        }

       //JP.search(q, function(err, list){
       //    res.json(list);
       //});


   }
});

module.exports = router;