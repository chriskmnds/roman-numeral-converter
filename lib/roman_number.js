/*
* Module to convert to/from Roman Numerals and numbers
* Author: Christos Koumenides
*/

(function() {
  'use strict';
  
  module.exports = function(value) {
    
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
    };
    
    // if null or empty
    if (value === null || typeof value === 'undefined' || value === '') {
      throw new Error('value required');
    }
    
    // if integer and within range
    else if ((typeof value === 'number') && (value % 1 === 0)) {
      if (value >= 1 && value <= 3999) {
        return app;
      } else {
        throw new Error('invalid range');
      }
    }
    
    // if string and valid characters only
    else if (typeof value === 'string') {
      return app;
    }
    
    // anything else fails
    throw new Error('invalid value');
  }
  
  function toInt(value) {
    return value;
  }
  
  function toString(value) {
    return value;
  }
  
})();