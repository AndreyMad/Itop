const pg = require("pg");
var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://xjqyfann:BD78ceWS83fAMP8xmskO-SJmaS6Yazzg@dumbo.db.elephantsql.com:5432/xjqyfann");

const conString =
  "postgres://xjqyfann:BD78ceWS83fAMP8xmskO-SJmaS6Yazzg@dumbo.db.elephantsql.com:5432/xjqyfann"; 
let client = new pg.Client(conString);

 client.connect((err) => {
  if (err) {
     console.error("could not connect to postgres", err);
  }
  console.log("postgree connected")
});

module.exports.client= client
