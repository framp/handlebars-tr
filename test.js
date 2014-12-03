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

it('should render a missing tr surrounded by ***', function (cb) {
  var handlebarsTr = require('./index')();
  var template = Handlebars.compile('{{tr "Test"}}');
  var data = {
    __language: {
      
    }
  }
  assert.equal(template(data), '***Test***');
  cb();
});

it('should render support custom characters', function (cb) {
  var handlebarsTr = require('./index')(null, null, '___');
  var template = Handlebars.compile('{{tr "Test"}}');
  var data = {}
  assert.equal(template(data), '___Test___');
  cb();
});