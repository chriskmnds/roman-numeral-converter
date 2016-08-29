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
        stringValue = toString(value);
        return app;
      } else {
        throw new Error('invalid range');
      }
    }

    // if string and valid characters only
    // (checking for 3+ consecutive roman nums will be done while iterating the string in toInt)
    else if (typeof value === 'string') {
      value = value.trim().toUpperCase();
      if (value.match(/^[MCDXLIV]+$/g) !== null) {
        intValue = toInt(value);
        stringValue = value;
        if (intValue !== null) {
          return app;
        }
      }
    }

    // anything else fails
    throw new Error('invalid value');
  }

  /**
   * Converts Roman Numeral (RN) to number.
   * @param value: the value to convert or return
   * @returns {Int} or {null}
   *
   * Traverses a lookup table of decreasing RN values and adds to return value
   * while removing RN chars from the passed value, until no more RN characters
   * are found at index 0. If more than 3 consecutive same RNs are found, null is returned.
   *
   */
  function toInt(value, convert) {
    var lookup = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
    var num = 0;
    for (var i in lookup) {
      var counter = 0;
      while (value.indexOf(i) === 0) {
        counter += 1;
        // if 3+ consecutive same Roman Numerals found
        if (counter > 3) {
          return null;
        }
        num += lookup[i];
        value = value.replace(i, '');
      }
    }
    // return num only if value has been exhausted
    return (value.length ? null: num);
  }

  /**
   * Converts number to Roman Numeral (RN).
   * @param value: the value to convert or return
   * @returns {string}
   *
   * Traverses a lookup table of decreasing RN values and adds to return value
   * while subtracting from the value, until 0.
   *
   */
  function toString(value) {
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

})();