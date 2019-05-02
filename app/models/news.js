function news (conn) {
	this._conn = conn;
}

news.prototype.lastNews = function (callback) {
	this._conn.query('SELECT * FROM noticias ORDER BY data DESC LIMIT 5', callback);
}

module.exports = function () {
	return news;
}