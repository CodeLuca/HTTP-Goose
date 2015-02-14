/* Dependencies */
var http = require("http");

Server = function(params){
  if (!(this instanceof Server)) return new Server();
  this.params = params || {};
  this.readyToListen = 0;
};

Server.prototype._resource = function(obj){
  this._dump = obj;
};

Server.prototype.create = function(callback, db){
  this._server = http.createServer(function(req, res){
    // Create the Goose objects and short refs
    rsg = new Object;
    rqg = new Object;

    /* Where most of the HTTP API magic happens*/
      // Test
      rsg.write = function(v){
        res.write(v);
      };

      // Test 2
      rsg.findAndWrite = function(collection, obj){
        db.collection(collection).find(obj||{}).toArray(function(err, data){
          res.write(JSON.stringify(data));
        });
      }

    // Make callback vars reference Goose objects
    res.goose = rsg;
    req.goose = rqg;

    callback(req, res);
  })
  .listen(
    this._dump.port || 80, // Set value or 80
    this._dump.host || 80, // Set value or localhost
    this._dump.callback || function(){} // Either run set value, or use fallback
  );
};

Server.prototype.listen = function(a){
  this._dump = a;
}

/* Export */
module.exports = exports = Server;
