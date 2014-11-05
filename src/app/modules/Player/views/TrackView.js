'use strict';

module.exports = function (PlayerApp) {
    return Backbone.Marionette.ItemView.extend({
        template: PlayerApp.getTemplate('track'),
        tagName: 'li'
    });
};