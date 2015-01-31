/* Dependencies */
var mdbClient = require("mongodb").MongoClient;

/* Exports */
Methods = function(params){
  if(!(this instanceof this)) return new Methods(params);
  this.params = params || {};
}

Methods.prototype.launch =
Methods.prototype.connect = function(snapback){
  var urlConstruct;
  // If "params" is an real.
  if (typeof this.params !== "undefined") {
    
    if (typeof this.params === "object") {
      urlConstruct = 
        "mongodb://" + 
	  (typeof this.params.user !== "undefined" ? (
	    
	  ) : ()) + // User & password
	  (this.params.host || "localhost")
    }
    
  } else {
    urlConstruct = "mongodb://localhost/";
  }
  
  mdbClient.connect("mongodb://", function(err, db){
      
  });
}