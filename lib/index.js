Goose = function(params){
  if(!(this instanceof Goose)) return new Goose(params);
  this.params = params || {};
  this.mongo = require("./mongo")(this.params);
  this.server = require("./server");
}

Goose.prototype.createServer = function(callback){
<<<<<<< HEAD
  this.mongo.createConnection(function(db){
    this.server.create(callback, db);
  });
=======
  this.server.create(callback, this.mongo); // test
>>>>>>> 483a0a300cf5cd3aa4f618811f8c71dd13cdbb00
}

Goose.prototype.listen = function(port, host, callback){
  this.server.listen(port, host, callback);
}

module.exports = Goose;
