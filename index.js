'use strict';

let co = require('co');
let app = require('./app.js');
let server = require('http').createServer(app.callback());
let models = require('./models');

let port = process.env.PORT || 8080;

co(function* () {
	var db_connection = yield models.sequelize.sync({ force: true });
	if (db_connection) {
		server.listen(port, function() {
			console.log('Koa server listening on port ' + server.address().port);
		});
	}
	else {
		console.log('Could not connect to MySQL Server');
	}
});