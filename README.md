#handlebars-tr

A simple helper to translate strings in handlebars.

##Usage

    var Handlebars = require('handlebars');
    //var handlebarsTr = require('handlebars-tr')(Handlebars, '__language', '***');
    var handlebarsTr = require('handlebars-tr')(); //This line is equivalent to the previous one

    var template = Handlebars.compile('{{tr "Test"}}');
    var data = {
      __language: {
        Test: 'TestTranslation{{magic}}'
      }
      magic: 'Magic'
    };
    console.log(template(data));

This helper actually compile the strings in `__language` as handlebars template, passing all the data available to the root context.

If a string is not found in `__language`, the path will be printed surrounded by `***`: `***Test***`


##License
MIT
