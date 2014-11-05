'use strict';

module.exports = App.module('PlayerApp', Backbone.Marionette.Module.extend({
    startWithParent: true,

    initialize: function () {
        this.playerController = new (require('./controllers/PlayerController')(this));
        App.router.processAppRoutes(this.playerController, {
            'index': 'indexAction'
        });
    },

    getTemplate: function (templateId) {
        return path.join('modules', 'Player', 'views', 'templates', templateId)
    }
}));