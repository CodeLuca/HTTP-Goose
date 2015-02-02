var httpgoose = require("../lib/mongo.js")({host:"localhost", "user":"public_api", "pass":"public_api", "name":"chaxo"});
var http = require("http");

httpgoose.createConnection(function(db){
  console.log(db.constructor.prototype);
  db.testExtending("Lol");
  console.log("connected");
});