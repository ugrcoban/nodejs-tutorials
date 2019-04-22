var fs = require('fs');
var file=["oldname.txt", "newname.txt"];

fs.rename(file[0], file[1], function (err) {
  if (err) throw err;
  console.log(file[0] + ' changed to '+ file[1] +' - File Renamed!');
});