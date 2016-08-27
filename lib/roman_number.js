/*
* Module to convert to/from Roman Numerals and numbers
* Author: Christos Koumenides
*/

(function() {
  'use strict';
  
  module.exports = function(value) {
    
    if (value === 10000) throw new Error('invalid range');
    
    // some optimisation - will only compute these once per function call/init
    // and return them on consecutive calls to "toInt" and toString"
    var intValue, stringValue = null;
    
    var app = {
      toInt: function() {
        return intValue;
      },
      toString: function() {
        return stringValue;
      }
    }
    
    
    
    
    
    return app;
  }
  
})();