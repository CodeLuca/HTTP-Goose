var goose = require("../lib")({"name":"chaxo"});

goose.mongo.on("error", function(err){
  console.log(err)
});

goose.createServer(function(req, res){
  res.goose.write("Hello");
  res.end();
});

goose.listen(80);
