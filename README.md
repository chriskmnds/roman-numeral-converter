# roman-numeral-converter
Node module for converting to/from Roman Numerals and numbers.

## Install & Use

1. Install required packages:

  `npm install`

2. If all successful, run the tests:

  `npm test`

3. Example use:

  In the directory where the repository was cloned:

  ```
  var RomanNumber = require('./roman-numeral-converter');
  
  var app = new RomanNumber('I');
  
  console.log(app.toInt());// logs 1
  console.log(app.toString());// logs I
  
  ```

## Dev Notes

Start: ~14:30 GMT+3

End: 18:30 GMT+3
