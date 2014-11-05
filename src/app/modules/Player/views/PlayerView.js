'use strict';

module.exports = function (PlayerApp) {
    return Backbone.Marionette.ItemView.extend({
        template: PlayerApp.getTemplate('player'),
        className: 'player-container',

        ui: {
            player: 'audio#player',
            playBtn: 'div#play-btn',
            prevBtn: 'div#prev-btn',
            nextBtn: 'div#next-btn'
        },

        triggers: {
            'click @ui.playBtn': 'player:play',
            'click @ui.prevBtn': 'player:next',
            'click @ui.nextBtn': 'player:prev'
        }
    });
};