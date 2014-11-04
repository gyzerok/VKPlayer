'use strict';

var VKService = require('./services/VKService');

module.exports = new Backbone.Marionette.Application({
    windows: {},

    initialize: function () {
        this.windows.main = gui.Window.get();
    },

    onStart: function () {
        this.listenTo(VKService, 'ready', function () {
            this.windows.main.show();
        });
        VKService.auth();
    }
});