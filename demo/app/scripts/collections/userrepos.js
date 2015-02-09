/*global define*/

define([
    'underscore',
    'backbone',
    'models/repository'
], function (_, Backbone, RepositoryModel) {
    'use strict';

    var UserReposCollection = Backbone.Collection.extend({
        model: RepositoryModel,

        initialize: function (models, options) {
            if (!options && !_.isArray(models)) {
                options = models;
                models = null;
            }

            this.url = "https://api.github.com/users/" + options.login + "/repos";
        }
    });

    return UserReposCollection;
});
