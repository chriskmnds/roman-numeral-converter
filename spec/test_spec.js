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
    it('Testing ' + value + ': should throw value required error', function() {
      expect(function(){ RomanNumber(value); }).toThrow(new Error("value required"));
    });
  });
  
  ['IIII', 'MMMMCMXCIX', 'MMMMDMXCIX', 'error', 'CD1X', '1473'].forEach(function(value) {
    it('Testing ' + value + ': should throw invalid value', function() {
      expect(function(){ RomanNumber(value); }).toThrow(new Error("invalid value"));
    });
  });
  
  [0, 10000].forEach(function(value) {
    it('Testing ' + value + ': should throw invalid range', function() {
      expect(function(){ RomanNumber(value); }).toThrow(new Error("invalid range"));
    });
  });
  
  // valid values and expected toInt/String results
  var validValues = [
    {value:1, expected:{toInt:1,toString:'I'}},
    {value:3, expected:{toInt:3,toString:'III'}},
    {value:4, expected:{toInt:4,toString:'IV'}},
    {value:5, expected:{toInt:5,toString:'V'}},
    {value:1968, expected:{toInt:1968,toString:'MCMLXVIII'}},
    {value:2999, expected:{toInt:2999,toString:'MMCMXCIX'}},
    {value:3000, expected:{toInt:3000,toString:'MMM'}},
    {value:'I', expected:{toInt:1,toString:'I'}},
    {value:'III', expected:{toInt:3,toString:'III'}},
    {value:'IV', expected:{toInt:4,toString:'IV'}},
    {value:'V', expected:{toInt:5,toString:'V'}},
    {value:'CDXXIX', expected:{toInt:429,toString:'CDXXIX'}},
    {value:'MCDLXXXII', expected:{toInt:1482,toString:'MCDLXXXII'}},
    {value:'MCMLXXX', expected:{toInt:1980,toString:'MCMLXXX'}},
  ];

  validValues.forEach(function(v) {
    describe('Testing ' + v.value + ':', function() {
      it('toString method should return ' + v.expected.toString, function() {
        var app = RomanNumber(v.value);
        expect(app.toString()).toEqual(v.expected.toString);
      });
      it('toInt method should return ' + v.expected.toInt, function() {
        var app = RomanNumber(v.value);
        expect(app.toInt()).toEqual(v.expected.toInt);
      });
    });
  });
  
});