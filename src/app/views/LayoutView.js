'use strict';

module.exports = function (App) {
    return Backbone.Marionette.LayoutView.extend({
        template: path.join('views', 'templates', '_layout'),
        className: 'application',

        regions: {
            playerReg: 'div#player-region',
            contentReg: 'div#content-region'
        }
    });
};