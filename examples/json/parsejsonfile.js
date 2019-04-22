// include file system module
var fs = require('fs');
 
// read file sample.json file
fs.readFile('parsejsonfile.test.json',
    // callback function that is called when reading file is done
    function(err, data) { 
        // json data
        var jsonData = data;
 
        // parse json
        var jsonParsed = JSON.parse(jsonData);
 
		Object.keys(jsonParsed.users).forEach(function(key) {
			var row = jsonParsed.users[key];
			//console.log(jsonParsed);
			console.log(row.name+' '+row.phone.gsm);
		});
       
});