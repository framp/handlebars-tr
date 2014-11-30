#handlebars-tr

A simple helper to translate strings in handlebars.

##Usage

    var Handlebars = require('handlebars');
    //var handlebarsTr = require('handlebars-tr')(Handlebars, '__language');
    var handlebarsTr = require('handlebars-tr')(); //This line is equivalent to the previous one

    var template = Handlebars.compile('{{tr "Test"}}');
    var data = {
      __language: {
        Test: "TestTranslation"
      }
    };
    console.log(template(data));

##License
MIT
