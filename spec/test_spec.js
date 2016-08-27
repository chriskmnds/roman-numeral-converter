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
  
  
  
});