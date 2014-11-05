'use strict';

module.exports = function (PlayerApp) {
    var PlayerView = require('../views/PlayerView')(PlayerApp);

    return Backbone.Marionette.Controller.extend({
        indexAction: function () {
            var playerView = new PlayerView();
            App.layoutView.playerReg.show(playerView);
        }
    });
};