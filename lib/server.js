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
    gg = new Object;  // Generic Goose data / functions
    rsg = new Object; // Response Goose data / functions
    rqg = new Object; // Request Goose data/ functions
    gg.comp = new Object, gg.compNum = 0;  // Default object and comp position.  (Used for sync)
    gg.error = new Object; // Error object, where error handlers are dumped into.
    gg.checkFinish = function(){
      if (gg.compNum === 0) {
        res.end(JSON.stringify(gg.comp));
      }
    }

    /* Where most of the HTTP API magic happens*/
      // Create compilation object.
      rsg.initiate = rsg.init = function(object){
        gg.comp = object;
        return rsg;
      }

      // This sets the collection that will be worked in, also returns rsg for chained.
      rsg.setCollection = function(colname){
        gg.workingCollection = db.collection(colname);
        return rsg;
      }

      // Error handling, for MongoDB queries
      rsg.setError = function(errname, handler){
        gg.error[errname] = handler;
      }

      // Find function.
      rsg.find = function(name, obj){
        gg.compNum++;
        gg.workingCollection.find(obj || {}).toArray(function(err, data){
          if (err) gg.error["find"].handler(err);
          gg.comp[name] = data;
          gg.compNum--;
          gg.checkFinish();
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
