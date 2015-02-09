/*global define*/

define([
    'underscore',
    'backbone',
    'collections/userrepos'
], function (_, Backbone, UserReposCollection) {
    'use strict';

    var UserModel = Backbone.Model.extend({

        initialize: function() {
            this.url = "https://api.github.com/users/" + this.get("login");

            var repos = new UserReposCollection({ login: this.get("login") });
            this.set("repos", repos);
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        fetch: function () {
            var self = this,
                args = arguments;

            return this.get("repos").fetch().then(function () {
                return Backbone.Model.prototype.fetch.apply(self, args);
            });
        },
        toJSON: function () {
            return _.extend(
                Backbone.Model.prototype.toJSON.apply(this, arguments),
                {
                    repos: this.get("repos").toJSON()
                }
            );
        }
    });

    return UserModel;
});
