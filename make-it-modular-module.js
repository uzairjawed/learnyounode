var fs = require('fs');

module.exports = function (path, filter, callback) {

	fs.readdir(path, function (err, list) {
	
		if (err) {
			return callback(err);
		}

		var list_files = [];

		for (var i =0; i < list.length; i++) {
			if (list[i].split('.').length > 1 && list[i].split('.').pop() == filter) {
				list_files.push(list[i]);
			}
		}

		callback(null, list_files);

	});	

}