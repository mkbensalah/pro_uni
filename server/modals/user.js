 var db = require("../helpers/db-setup");

// add user to db
exports.create = function(username, email, done) {
  var values = [username, email /*, new Date().toISOString()*/];
  db.get().query(
    "INSERT INTO Users (username, email) VALUES(?, ?)",
    values,
    function(err, result) {
      if (err) {
        console.log(err);
        return done(err);
      }
      done(null, result.insertId);
    }
  );
};

// list all users
exports.getAll = function(done) {
  db.get().query("SELECT * FROM Users", function(err, rows) {
    if (err) return done(err);
    done(null, rows);
  });
};

// find user by email
exports.findByEmail = function(email, done) {
  db.get().query("SELECT * FROM Users WHERE email = ?", email, function(
    err,
    rows
  ) {
    if (err) return done(err);
    done(null, rows);
  });
};
