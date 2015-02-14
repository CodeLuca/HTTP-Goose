Goose = function(params){
  if(!(this instanceof Goose)) return new Goose(params);
  this.params = params || {};
  this.mongo = require("./mongo")(this.params);
  this.server = require("./server")();
}

Goose.prototype.createServer = function(callback){
  _Goose = this;
  this.mongo.createConnection(function(db){
    _Goose.server.create(callback, db);
  });
}

Goose.prototype.listen = function(port, host, callback){
  this.server.listen({port:port, host:host, callback:callback});
}

module.exports = Goose;
