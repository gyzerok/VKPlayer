'use strict';

module.exports = App.module('PlayerApp', Backbone.Marionette.Module.extend({
    startWithParent: true,

    initialize: function () {
        this.playerController = new (require('./controllers/PlayerController')(this));
        App.router.processAppRoutes(this.playerController, {
            'index': 'indexAction'
        });

        var PlayerLayoutView = require('./views/PlayerLayoutView')(this);
        this.layoutView = new PlayerLayoutView();
        App.show(this.layoutView);
    },

    show: function (view) {
        this.layoutView.contentReg.show(view);
    },

    getTemplate: function (templateId) {
        return path.join('modules', 'Search', 'views', 'templates', templateId)
    }
}));