/*global define*/

define([
    'underscore',
    'backbone',
    'models/repository'
], function (_, Backbone, RepositoryModel) {
    'use strict';

    var UserReposCollection = Backbone.Collection.extend({
        model: RepositoryModel
    });

    return UserReposCollection;
});
