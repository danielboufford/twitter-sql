var pg = require('pg');

var client = new pg.Client('postgres://localhost/twitterdb');

client.connect(function(err,ok) {
	if (err) throw new Error ('Error: ' + err);
	else console.log("connection successful");
});

module.exports = client;

