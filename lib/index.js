Goose = function(params){
  if(!(this instanceof Goose)) return new Goose(params);
  this.params = params || {};
  this.mongo = require("./mongo")(this.params);
  this.server = require("./server");
}

Goose.prototype.createServer = function(callback){
  this.mongo.createConnection(function(db){
    this.server.create(callback, db);
  });
}

Goose.prototype.listen = function(port, host, callback){
  this.server.listen(port, host, callback);
}

module.exports = Goose;
