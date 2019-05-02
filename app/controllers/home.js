module.exports.home = function (application, req, res) {
	var conn = application.config.dbConnection();
	var news = new application.app.models.news(conn);

	news.lastNews(function(erro, result){
		res.render("home/index", {news: result});
	});	

}