module.exports.form = function (application, req, res) {
	res.render("admin/form_add_noticia", {validation: {}});	
}

module.exports.cadastrar = function (application, req, res) {
	var post = req.body;
	var conn = application.config.dbConnection();
	var sql = new application.app.models.sqlFunctions(conn);

	req.assert('titulo', 'Título é obrigatório').notEmpty();
	req.assert('resumo', 'Resumo é obrigatório').notEmpty();
	req.assert('autor', 'Autor é obrigatório').notEmpty();
	req.assert('data_noticia', 'Data é obrigatório').notEmpty();
	req.assert('noticia', 'Notícia é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if (erros) {
		res.render("admin/form_add_noticia", {validation: erros});
		return;
	}

	sql.insert("noticias", post, function(error, result){
		res.redirect("/noticias");
	});
}