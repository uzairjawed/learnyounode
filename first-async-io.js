var fs = require('fs');

function print(callback) {

	fs.readFile(process.argv[2], function (err, data) {
		var splitted = data.toString().split("\n");
		callback(splitted.length-1);
	});
}

print(console.log);
