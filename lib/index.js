Goose = function(params){
  if(!(this instanceof Goose)) return new Goose(params);
  this.params = params || {};
  this.mongo = require("./mongo")(this.params);
  this.server = require("./server");
}

Goose.prototype.createServer = function(callback){
  this.server.create(callback); // test
}

Goose.prototype.listen = function(port, host, callback){
  this.server.listen(port, host, callback);
}

module.exports = Goose;