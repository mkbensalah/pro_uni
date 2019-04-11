var db = require("../helpers/db-setup");
var userID=0;
// add user to db
exports.create = function(user, done) {
  var userID=0;
  console.log("at create") ;
  console.log(user) ;
  var values = [user.username, user.mail ,user.password,user.tel];
 
  db.get().query(
    "INSERT INTO user (name, email,password,tel) VALUES(?, ?,?,?)",
    values,
    function(err, result) {
      if (err) {
        console.log(err);
        return done(err);
      }
     // done(null, result.insertId);
       userID=result.insertId;
      console.log(result.insertId);
    // to check wheather the account type is client or agency 
console.log(user.account_type)
if (user.account_type=='client')
{
  console.log(userID);
  db.get().query(
    "INSERT INTO client (CIN, userid) VALUES(?, ?)",
  [user.cin,userID],
    function(err, result) {
      if (err) {
        console.log(err);
        return done(err);
      }
      done(null, userID);
    }
  );
}
else{
db.get().query(
    "INSERT INTO agence (num_patente, description ,iduser) VALUES(?, ?,?)",
  [user.patente_num,user.about,userID],
    function(err, result) {
      if (err) {
        console.log(err);
        return done(err);
      }
      done(null, userID);
    }
  );
}

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
