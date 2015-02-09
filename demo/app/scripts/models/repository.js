/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var RepositoryModel = Backbone.Model.extend({

        initialize: function() {
            this.url = "https://api.github.com/repos/" + this.get("full_name");
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return RepositoryModel;
});
