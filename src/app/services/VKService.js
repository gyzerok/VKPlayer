'use strict';

var https = require('https');
var qs = require('querystring');

var vkApiUrl = 'https://api.vk.com/method/';

module.exports = new (Backbone.Marionette.Object.extend({
    token: '',
    uid: 0,
    expires: 0,

    initialize: function () {
        this.uid = localStorage.uid;
        this.token = localStorage.token;
        this.expires = localStorage.expires;
    },

    configure: function (uid, token, expires) {
        localStorage.token = this.token = token;
        localStorage.uid = this.uid = uid;
        localStorage.expires = this.expires = expires;
        this.trigger('ready');
    },

    auth: function () {
        var vkUrl = 'https://oauth.vk.com/authorize?' + qs.stringify({
            client_id: '4619663',
            scope: 'audio',
            redirect_uri: 'https://oauth.vk.com/blank.html',
            display: 'page',
            v: '5.26',
            response_type: 'token'
        });
        var vkWindow = gui.Window.open(vkUrl, {
            width: 656,
            height: 378,
            toolbar: true
        });
        vkWindow.show();
        this.listenTo(vkWindow, 'document-end', function () {
            if (vkWindow.window.location.pathname != '/blank.html') return;
            var hash = vkWindow.window.location.hash;
            hash = hash.substring(1);
            var args = hash.split('&');
            var token = args[0].substring(args[0].indexOf('=') + 1);
            var expires = args[1].substring(args[1].indexOf('=') + 1);
            var uid = args[2].substring(args[2].indexOf('=') + 1);
            this.configure(uid, token, expires);
            vkWindow.close(true);
        }.bind(this));
    },

    getAudio: function () {
        var url = vkApiUrl + 'audio.get?access_token=' + this.token;
        var data = '';
        https.get(url, function (res) {
            window.console.log(res.statusCode);
            res.on('data', function (chunk) {
                data += chunk;
            }).on('end', function () {
                cb(JSON.parse(data).response);
            });
        });
    }
}));