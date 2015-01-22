var express = require('express');
var app = express();
port = process.env.PORT || 8000;

app.get('*', function(req, res) {
	  return res.send("A Response!");
	});

app.listen(port); //the port you want to use
console.log("Express server running at => http://localhost:" + port + "/\nCTRL + C to shutdown");
