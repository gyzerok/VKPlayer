'use strict';

module.exports = function (PlayerApp) {
    var PlayerView = require('../views/PlayerView')(PlayerApp);
    var PlaylistView = require('../views/PlaylistView')(PlayerApp);
    var Playlist = require('../../../collections/Playlist');

    return Backbone.Marionette.Controller.extend({
        indexAction: function () {
            var playerView = new PlayerView();
            App.layoutView.playerReg.show(playerView);

            var playlist = new Playlist();
            var playlistView = new PlaylistView({ collection: playlist });
            App.show(playlistView);
            playlist.search();
        }
    });
};