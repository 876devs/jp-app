/**
 * Created by tremaine on 1/7/16.
 */
(function(){
    var mongoose = require('mongoose');

    mongoose.connect(process.env.MONGOLAB_URI);

    var JPSchema = new mongoose.Schema({
        first_name: {type: String, required: true},
        last_name: {type: String, required: true, index: true},
        middle_name :{type: String, index: true},
        street: {type: String},
        locality: {type: String},
        town: {type: String},
        parish: {type: String, required: true},
        contact: [{type: String}],
        created: {type: Date, required: true},
        listed: {type: Date, required: true},
        occupation: {type: String, required: true}
    });
    /*
     Static Methods
     */
    /**
     * Performs a search on a JP
     * @param query
     * @param callback
     * @returns {*|{}|Query}
     */
    JPSchema.statics.search = function(query, callback){
        return this.find(query, callback);
    };

    module.exports = mongoose.model('JP', JPSchema);
})();



