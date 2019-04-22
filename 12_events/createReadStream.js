var fs = require('fs');
var rs = fs.createReadStream('./test/demo.txt');
rs.on('open', function () {
  console.log('createReadStream - The file is open');
});