'use strict';
var assert = require('assert');
var Handlebars = require('handlebars');

it('should translate from __language as default', function (cb) {
  var handlebarsTr = require('./index')();
  var template = Handlebars.compile('{{tr "Test"}}');
  var data = {
    __language: {
      Test: "TestTranslation"
    }
  }
  assert.equal(template(data), 'TestTranslation');
  cb();
});

it('should translate from custom path', function (cb) {
  var handlebarsTr = require('./index')(null, '__custom__');
  var template = Handlebars.compile('{{tr "Test"}}');
  var data = {
    __custom__: {
      Test: "TestTranslation"
    }
  }
  assert.equal(template(data), 'TestTranslation');
  cb();
});

it('should render a handlebars template for each variable', function (cb) {
  var handlebarsTr = require('./index')();
  var template = Handlebars.compile('{{tr "Test"}}');
  var data = {
    __language: {
      Test: 'TestTranslation{{magic}}'
    },
    magic: 'Magic'
  }
  assert.equal(template(data), 'TestTranslationMagic');
  cb();
});
