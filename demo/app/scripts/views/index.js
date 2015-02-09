/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var IndexView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            "change input.search": "changeSearch",
            "submit form#search-form": "search",
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            _.bindAll(this, "search", "changeSearch");
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        search: function () {
            document.location.hash = "#/users/" + this.model.get("search");
            return false;
        },
        changeSearch: function (e) {
            this.model.set("search", $(e.currentTarget).val());
        }
    });

    return IndexView;
});
