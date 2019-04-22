var fs = require('fs');

fs.appendFile('appendFile.test.txt', '\n This is my text.', function (err) {
  if (err) throw err;
  console.log('fs.appendFile - Updated!');
});