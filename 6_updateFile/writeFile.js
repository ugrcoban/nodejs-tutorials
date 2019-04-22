var fs = require('fs');

fs.writeFile('writeFile.test.txt', '\t This is my text', function (err) {
  if (err) throw err;
  console.log('fs.writeFile - Replaced!');
});