/*global define*/

define([
    'jquery',
    'backbone',
    'models/user',
    'views/user'
], function ($, Backbone, User, UserView) {
    'use strict';

    var UserRouter = Backbone.Router.extend({
        routes: {
            "users/:login": "user",
        },

        user: function (login) {
            var user = new User({ login: login });
            user.fetch().then(function () {
                var view = new UserView({ el: $("#main"), model: user });
                view.render();
            });
        }
    });

    return UserRouter;
});
