/* Require the Goose library */
var goose = require("../")({
  "host": "localhost",
  "user": "public_api",
  "pass": "public_api",
  "name": "chaxo" // example database
});

/* Create Goose server */
goose.createServer(function(req, res){
  res.goose.setError("find", function(e){
    res.write(e);
    res.end("?");
  });

  res.goose.setCollection("users");
  res.goose.find("user", {username:/m/i});
});

/* Simply listen */
goose.listen(80);
