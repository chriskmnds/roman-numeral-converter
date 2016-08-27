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
        intValue = value;
        stringValue = toString(value, true);
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
  
  function toInt(value, convert) {
    if (convert) {
      
    }
    return value;
  }
  
  /**
   * Converts number to Roman Numeral.
   * @param value: the value to convert or return
   * @param convert: boolean
   * 
   * If convert parameter is passed, function will convert an integer to a roman numeral.
   * If no convert, then value passed will simply be returned.
   *
   * Traverses a lookup table of decreasing roman numeral values and adds to return value 
   * while subtracting from the value, until 0.
   *
   */
  function toString(value, convert) {
    if (convert) {
      var lookup = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
      var roman = '';
      for (var i in lookup) {
        while (value >= lookup[i]) {
          roman += i;
          value -= lookup[i];
        }
      }
      return roman;
    }
    return value;
  }
  
  /*
    var romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  */
  
})();