var fs = require('fs');
var file = 'delete.test.txt';

fs.unlink(file, function (err) {
  if (err) throw err;
  console.log('fs.unlink : '+file+' - File deleted!');
});