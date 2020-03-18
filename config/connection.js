var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "nebpbnkk61jardf0",
    password: "d12n0o5kbtdrn019",
    database: "	y7znuhivpj3ldlf0"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
