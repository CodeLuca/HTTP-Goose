/* Dependencies */
var http = require("http");

Server = function(params){
  if (!(this instanceof Server)) return new Server(params);
  this.params = params;
}

Server.prototype._resource = function(obj){
  this._resource = obj;
}

Server.prototype.create = function(callback, mongo){
  mongo.createConnection(function(db){
    this.server = http.createServer(function(req, res){
      res.goose = new Object;
      req.goose = new Object;
      res.goose.findAndWrite = function(collection, find){
        db.collection(collection).find(find).toArray(function(err, data){
          if (err) res.write(JSON.stringify({error:err}));
          res.write(JSON.parse(data));
        });
      }
      callback(req, res)
    });
  });
}

Server.prototype.listen = function(port, host, callback){
  this.server.listen(port||80, host||"localhost", callback||function(){});
}

/* Export */
module.exports = Server();
