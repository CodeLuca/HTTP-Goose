/* Dependencies */
var mdbClient = require("mongodb").MongoClient;

/* Exports */
Methods = function(params){
  if(!(this instanceof Methods)) return new Methods(params);
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
	    this.params.user + 
	    (typeof this.params.pass !== "undefined" || typeof this.params.password !== "undefined" ? 
	      (":"+(this.params.pass || this.params.password)) : "")
	  + "@") : "") + // User & password
	  (this.params.host || "localhost") + "/" + (this.params.path || "");
    } else {
      urlConstruct = this.params;
    }
    
  } else {
    urlConstruct = "mongodb://localhost/";
  }
  
  console.log(urlConstruct);
  mdbClient.connect("mongodb://", function(err, db){
      
  });
}

module.exports = Methods;