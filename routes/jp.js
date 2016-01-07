/**
 * Created by tremaine on 1/7/16.
 */
var express = require('express'),
    router = express.Router(),
    JP = require('../models/jp');

/**
 * Get JP Listing
 */
router.get('/jp', function(req, res) {
    JP.find().exec(function(err, list){
       res.json(list);
    });
});
/**
 * Create a JP
 */
router.post('/jp', function(req, res) {
    //req.body.name_lower = req.body.name.toLowerCase();
    req.body.created = Date.now();
    new JP(req.body).save(function(err, result){
        if(err) console.log(err);

        res.json(result._id);
    });
});

module.exports = router;
