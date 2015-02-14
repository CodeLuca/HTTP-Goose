var goose = require("../lib")({"user":"public_api", "pass":"public_api", "name":"chaxo"});

goose.mongo.on("error", function(err){
  console.log(err);
});

goose.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "application/json"});
  depth = req.url.split("/"); depth.splice(0,1)
  res.goose.findAndWrite(depth[0], new RegExp("^" + depth[1] + "$", depth[2]||"g"));
  res.end();
});

goose.listen(81);
