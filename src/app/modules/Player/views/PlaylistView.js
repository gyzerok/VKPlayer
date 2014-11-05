'use strict';

module.exports = function (PlayerApp) {
    var TrackView = require('./TrackView')(PlayerApp);

    return Backbone.Marionette.ItemView.extend({
        childView: TrackView,
        tagName: 'ul'
    });
};