'use strict';

var Handlebars = require('handlebars');

exports.start = function () {

    window.Backbone.Marionette.TemplateCache.prototype.loadTemplate = function (templateId) {
        return fs.readFileSync(process.cwd() + '/app/' + templateId + '.html').toString();
    };

    window.Backbone.Marionette.TemplateCache.prototype.compileTemplate = function (rawTemplate) {
        return Handlebars.compile(rawTemplate);
    };

    global.window = window;
    global.gui = window.require('nw.gui');
    global.$ = window.$;
    global._ = require('lodash');
    global.Backbone = window.Backbone;
    global.VK = window.VK;
    global.localStorage = window.localStorage;

    var App = require('./app');
    global.App = App;
    App.start();
};