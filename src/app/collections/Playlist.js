'use strict';

var VKService = require('../services/VKService');
var Track = require('../models/Track');

module.exports = Backbone.Collection.extend({
    model: Track,

    search: function () {
        VKService.getAudio(function (tracks) {
            _.each(tracks, function (track) {
                this.push(new Track(track));
            }.bind(this));
        }.bind(this));
    }
});