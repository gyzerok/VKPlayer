'use strict';

module.exports = function (PlayerApp) {
    var PlayerService = require('../services/PlayerService');

    return Backbone.Marionette.ItemView.extend({
        template: PlayerApp.getTemplate('player'),
        className: 'player container',

        ui: {
            player: 'audio#player',
            playBtn: 'span#play-btn',
            prevBtn: 'span#prev-btn',
            nextBtn: 'span#next-btn'
        },

        events: {
            'click @ui.playBtn': 'onPlay',
            'click @ui.prevBtn': 'onNext',
            'click @ui.nextBtn': 'onPrev'
        },

        onShow: function () {
            PlayerService.fromAudio(this.ui.player);
        },

        onPlay: function () {
            console.log('here');
            PlayerService.play();
        }
    });
};