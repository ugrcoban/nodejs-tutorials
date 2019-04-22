var fs = require('fs');

fs.open('test.open.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('fs.open - created!');
});