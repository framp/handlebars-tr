 
module.exports = function(Handlebars, path, signal){
  if (!Handlebars) 
    Handlebars = require('handlebars');
  if (!path)
    path = '__language';
  if (signal === undefined)
    signal = '***';
  Handlebars.registerHelper('tr', function(context, options){
    if (!options.data.root[path] || !options.data.root[path][context])
      return signal + context + signal;
    var template = Handlebars.compile(options.data.root[path][context]);
    return template(options.data.root);  
  });
}