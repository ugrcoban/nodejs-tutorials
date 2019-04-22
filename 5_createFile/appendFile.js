var fs = require('fs');

fs.appendFile('test.appendfile.txt', 'Created from fs.appendFile!', function (err) {
  if (err) throw err;
  console.log('fs.appendFile - Saved!');
});