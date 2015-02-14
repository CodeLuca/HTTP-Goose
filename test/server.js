var goose = require("../lib")({"user":"public_api", "pass":"public_api", "name":"chaxo"});

goose.createServer(function(req, res){
  res.goose.write("Hello");
  res.end();
});

goose.listen(80);
