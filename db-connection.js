var mysql = require("mysql");

exports.connect = function() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test",
    port: 3306
  });

  connection.connect(err => {
    if (!err) {
      console.log("Database is connected ... nn");
    } else {
      console.log("Error connecting database ... nn");
      return null;
    }
  });
  return connection;
};
