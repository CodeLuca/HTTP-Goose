/* Dependencies */
var http = require("http");

Server = function(params){
  if (!(this instanceof Server)) return new Server(params);
  this.params = params;
};

Server.prototype._resource = function(obj){
  this._resource = obj;
};

Server.prototype.create = function(callback, mongo){
  mongo.createConnection(function(db){
    _this.server = http.createServer(function(req, res){
      // Create the Goose objects and short refs
      sg = new Object;
      qg = new Object;


      /* Where most of the HTTP API magic happens*/
        // Test
        sq.write = function(v){
          res.write(v);
        };

      // Make callback vars refrence Goose objects
      res.goose = sg;
      req.goose = qg;

      callback(req, res);
    });
  });
};

Server.prototype.listen = function(port, host, callback){
  console.log(this);
  this.server.listen(port||80, host||"localhost", callback||function(){});
};

/* Export */
module.exports = Server();
