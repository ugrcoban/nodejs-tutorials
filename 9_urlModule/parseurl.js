var url = require('url');
var adr = 'http://localhost:8080/ugur.php?a=selam&b=1';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/ugur.php'
console.log(q.search); //returns '?a=selam&b=1'

var qdata = q.query; //returns an object: { a: 'selam', b: 1 }
console.log(qdata.a); //returns 'selam'