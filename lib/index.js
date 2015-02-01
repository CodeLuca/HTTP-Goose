HTTPGoose = function(params){
  if(!(this instanceof HTTPGoose)) return new HTTPGoose(params);
  this.params = params || {};
  this.methods = require("./mongo")(this.params);
}

module.exports = HTTPGoose;