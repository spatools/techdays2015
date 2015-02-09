/*global define*/

define([
    'jquery',
    'backbone',
    'models/search',
    'views/index'
], function ($, Backbone, Search, IndexView) {
    'use strict';

    var IndexRouter = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function () {
            var view = new IndexView({ el: $("#main"), model: new Search() });
            view.render();
        }
    });

    return IndexRouter;
});
