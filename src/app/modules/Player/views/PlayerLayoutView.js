'use strict';

module.exports = function (PlayerApp) {
    return Backbone.Marionette.LayoutView.extend({
        template: PlayerApp.getTemplate('_layout'),

        regions: {
            playerReg: 'div#player-region',
            contentReg: 'div#content-region'
        }
    });
};