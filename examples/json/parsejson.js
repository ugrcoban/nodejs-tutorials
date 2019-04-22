// json data
var jsonData = '{"data":[{"name":"UGUR","city":"Istanbul"},{"name":"İBRAHİM","city":"İSTANBUL"}]}';
 
// parse json
var jsonParsed = JSON.parse(jsonData);
 
// access elements
console.log(jsonParsed.data[0].name);