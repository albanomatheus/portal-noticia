module.exports = function (application) {
	application.get("/form", function(req, res){
		application.app.controllers.form.form(application, req, res);
	});

	application.post("/cadastrar", function (req, res) {
		application.app.controllers.form.cadastrar(application, req, res);
	});
}
