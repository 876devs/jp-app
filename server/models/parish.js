/**
 * Created by tremaine on 1/12/16.
 */
(function(){
    var mongoose = require('mongoose');

    mongoose.connect(process.env.MONGOLAB_URI);

    var ParishSchema = new mongoose.Schema({
        name: {type: String, required: true, index: true},
        code: {type: String, required: true, index: true}
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
    ParishSchema.statics.search = function(query, callback){
        return this.find(query, callback);
    };

    module.exports = mongoose.model('Parish', ParishSchema);
})();