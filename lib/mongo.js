/* Dependencies */
var mdbClient = require("mongodb").MongoClient;

/* Exports */
Mongo = function(params){
  if(!(this instanceof Mongo)) return new Mongo(params);
  this.params = params || {};
  this.params.user = this.params.user || this.params.username;
  this.params.pass = this.params.pass || this.params.password;
  this.params.name = this.params.name || this.params.database || this.params.db || this.params.path;
  
  
  // Create Mongo connection URL.
  urlConstruct = (
    (typeof this.params == "object") ?
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
      )):(this.params));
    
  console.log(urlConstruct);
}

module.exports = Mongo;