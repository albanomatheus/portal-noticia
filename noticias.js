var http = require('http');

http.createServer(function (req, res){
	var cat = req.url;
	// console.log(cat)	;
	if (cat == "/tecnologia") {
		res.end("<html><body>Noticias de tecnologia!</body></html>");
	} else if (cat == "/esporte") {
		res.end("<html><body>Noticias de esporte!</body></html>");
	} else if (cat == "/filmes") {
		res.end("<html><body>Noticias de filmes!</body></html>");
	} else {
		res.end("<html><body>Bem vindo ao portal!</body></html>");
	}
}).listen(3000);
