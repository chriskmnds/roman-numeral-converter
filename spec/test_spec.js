var RomanNumber = require('../lib/roman_number');

describe('Roman Numeral Converter tests.', function() {
  
  it('Calling with "new" should pass through and return object', function() {
    var app = new RomanNumber(123);
    expect(app).toEqual(jasmine.any(Object));
  });
  
  it('Calling without "new" should pass through and return object', function() {
    var app = RomanNumber(123);
    expect(app).toEqual(jasmine.any(Object));
  });
  
  [null, ''].forEach(function(value) {
    it(value + ' should throw value required error', function() {
      expect(function(){ RomanNumber(value); }).toThrow(new Error("value required"));
    });
  });
  
  ['IIII', 'MMMMCMXCIX', 'MMMMDMXCIX', 'error', 'CD1X', '1473'].forEach(function(value) {
    it(value + ' should throw invalid value', function() {
      expect(function(){ RomanNumber(value); }).toThrow(new Error("invalid value"));
    });
  });
  
  [0, 10000].forEach(function(value) {
    it(value + ' should throw invalid range', function() {
      expect(function(){ RomanNumber(value); }).toThrow(new Error("invalid range"));
    });
  });
  
});