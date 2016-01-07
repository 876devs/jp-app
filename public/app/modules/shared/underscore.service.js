/**
 * Created by tremaine on 1/7/16.
 */
(function(){
    'use strict';
    angular
        .module('underscore',[])
        .factory('_', _);
    /**
     * Allows Angular to utilize UnderscoreJs exposed as a factory.
     * @returns {*} Reference to the UnderscoreJs library.
     */
    function _(){
        return window._;
    }
})();
