var fs = require('fs');

fs.writeFile('writeFile.txt', 'Created from fs.writeFile!', function (err) {
  if (err) throw err;
  console.log('fs.writeFile - Saved!');
});