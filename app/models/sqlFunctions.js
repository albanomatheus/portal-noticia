function sql (connection) {
	this._con = connection;
}

sql.prototype.select = function (table, condition, callback) {
	this._con.query("SELECT * FROM " + table + " WHERE "+ condition, callback);
}

sql.prototype.insert = function (table, data, callback) {
	this._con.query("INSERT INTO " + table + " set ?", data, callback);
}

module.exports = function () {
	return sql;
}