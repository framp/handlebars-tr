 
module.exports = function(Handlebars, path){
  if (!Handlebars) 
    Handlebars = require('handlebars');
  if (!path)
    path = '__language';
  Handlebars.registerHelper('tr', function(context, options){
    if (!options.data.root[path][context])
      return options.fn(this);
    var template = Handlebars.compile(options.data.root[path][context]);
    return template(options.data.root);  
  });
}