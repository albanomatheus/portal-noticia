module.exports.noticias = function (application, req, res) {
	var con = application.config.dbConnection();
	var sql = new application.app.models.sqlFunctions(con);

	sql.select("noticias", "1", function (error, result) {
		res.render("noticias/noticias", {news : result});
	});
}

module.exports.noticia = function (application, req, res) {
	var con = application.config.dbConnection();
	var sql = new application.app.models.sqlFunctions(con);
	
	sql.select("noticias", "id_noticia=" + req.query.id_noticia, function (error, result) {
		console.log(result);
		res.render("noticias/noticia", {news : result});
	});
}