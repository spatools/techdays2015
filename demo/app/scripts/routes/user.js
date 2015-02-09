/*global define*/

define([
    'jquery',
    'backbone',
    'models/user',
    'models/repository',
    'views/user',
    'views/repository'
], function ($, Backbone, User, Repository, UserView, RepositoryView) {
    'use strict';

    var UserRouter = Backbone.Router.extend({
        routes: {
            "users/:login": "user",
            "users/:login/:repo": "user_repo"
        },

        user: function (login) {
            var user = new User({ login: login });
            user.fetch().then(function () {
                var view = new UserView({ el: $("#main"), model: user });
                view.render();
            });
        },

        user_repo: function (login, repo) {
            var repo = new Repository({ full_name: login + "/" + repo });
            repo.fetch().then(function () {
                var view = new RepositoryView({ el: $("#main"), model: repo });
                view.render();
            });
        }
    });

    return UserRouter;
});
