'use strict';

module.exports = function (PlayerApp) {
    var TrackView = require('./TrackView')(PlayerApp);

    return Backbone.Marionette.CollectionView.extend({
        childView: TrackView,
        tagName: 'ul'
    });
};