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
  this.server = http.createServer(function(req, res){
    res.goose = new Object;
    req.goose = new Object;
    res.goose.findAndWrite = function(find){
      res.write(data); // test
    }
    callback(req, res)
  });
}

Server.prototype.listen = function(port, host, callback){
  this.server.listen(port||80, host||"localhost", callback||function(){});
}

/* Export */
module.exports = Server();
