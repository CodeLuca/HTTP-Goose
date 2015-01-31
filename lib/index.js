var methods = require("./mongodb_methods")({"host":"localhost", "user":"public_api", "pass":"123"});

HTTPGoose = function(params){
  if(!(this instanceof HTTPGoose)) return new HTTPGoose(params);
  this.params = params || {};
}

HTTPGoose.prototype.test = function(){
  methods.connect(function(){
    console.log("lol");
  });
}

module.exports = HTTPGoose;