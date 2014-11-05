'use strict';

module.exports = new (Backbone.Marionette.Object.extend({
    player: null,
    tracks: null,
    currentIndex: 0,

    fromAudio: function (audio) {
        this.player = audio;
    },

    playlist: function (playlist) {
        if (playlist) this.tracks = playlist;
        return this.tracks;
    },

    current: function () {
        return this.tracks.at(this.currentIndex);
    },

    play: function () {
        this.player.src = this.current().get('url');
        this.player.play();
    },

    pause: function () {
        this.player.pause();
    },

    prev: function () {},

    next: function () {}
}));