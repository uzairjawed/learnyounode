var path = process.argv[2];
var filter = process.argv[3];

var mymodule = require('./make-it-modular-module');

mymodule(path, filter, function (err, list) {

	if (err) {
		return console.error(err);
	}

	list.forEach(function (l) {
		console.log(l);
	});

});