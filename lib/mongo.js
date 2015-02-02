/* Dependencies */
var Client = require("mongodb").MongoClient;

/* Exports */
Mongo = function(params){
  if(!(this instanceof Mongo)) return new Mongo(params);
  this.params = params || {};
  this.params.user = this.params.user || this.params.username;
  this.params.pass = this.params.pass || this.params.password;
  this.params.name = this.params.name || this.params.database || this.params.db || this.params.path;
  this.callbackDump = {error:function(e){console.warn(e);}};
  
  // Create Mongo connection URL.
  this.urlConstruct = ((typeof this.params == "object") ?
    ("mongodb://" + (
      (typeof this.params.user != "undefined") ?
        (this.params.user + (
          (typeof this.params.pass != "undefined") ?
            (":" + this.params.pass)
          :("")
        ) + "@")
      :("")
    ) + (this.params.host || "localhost") + (
        (typeof this.params.name != "undefined") ?
          ("/" + this.params.name)
        :("")
    )):(this.params)).toString(); // just to be sure
}

Mongo.prototype.createConnection = function(callback){
  _this = this;
  Client.connect(this.urlConstruct, function(e, db){
    if (e) _this.callbackDump.error(e);
    callback(db);
  });
}

Mongo.prototype.on = function(s, callback){
  if (s.match(/^error$/i)) {
    this.callbackDump.error = callback;
  }
}

module.exports = Mongo;