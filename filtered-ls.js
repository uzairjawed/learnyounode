var fs = require('fs');
var path = process.argv[2];
var filter = process.argv[3];
var temp;

fs.readdir(process.argv[2], function (err, list) {
	
	if (err) {
		console.log('empty file');
		return;
	}

	for (var i =0; i < list.length; i++) {
		if (list[i].split('.').length > 1 && list[i].split('.').pop() == filter) {
			console.log(list[i]);
		}
	}

});