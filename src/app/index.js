'use strict';

var VKService = require('./services/VKService');

module.exports = new Backbone.Marionette.Application({
    windows: {},
    layoutView: null,

    regions: {
        bodyReg: '#body'
    },

    initialize: function () {
        global.App = this;

        require('./router');

        this.windows.main = gui.Window.get();

        var LayoutView = require('./views/LayoutView')(this);
        this.layoutView = new LayoutView();
        this.bodyReg.show(this.layoutView);

        require('./modules');
    },

    onStart: function () {
        if (Backbone.history) {
            Backbone.history.started || Backbone.history.start();
        }

        this.listenTo(VKService, 'ready', function () {
            this.navigate('index');
            this.windows.main.show();
        });
        VKService.auth();
    },

    show: function (view) {
        this.layoutView.contentReg.show(view);
    },

    navigate: function (route, opts) {
        opts || (opts = { trigger: true });
        this.router.navigate(route, opts);
    }
});