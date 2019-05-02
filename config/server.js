let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let validator = require('express-validator');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(validator());

consign()
	.include('./app/routes')
	.then('./config/dbConnection.js')
	.then('./app/models')
	.then('./app/controllers')
	.into(app);

app.listen(3000, function () {
	console.log("Server ON");
});

module.exports = app;
