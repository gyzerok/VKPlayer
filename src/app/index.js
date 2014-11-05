'use strict';

var VKService = require('./services/VKService');

module.exports = new Backbone.Marionette.Application({
    windows: {},

    regions: {
        bodyReg: '#body'
    },

    initialize: function () {
        this.windows.main = gui.Window.get();
        require('./modules');
    },

    onStart: function () {
        this.listenTo(VKService, 'ready', function () {
            this.windows.main.show();
        });
        VKService.auth();
    },

    show: function (view) {

    }
});