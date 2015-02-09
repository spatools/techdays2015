/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var <%= _.classify(name) %>ViewList= Backbone.View.extend({
        template: JST['<%= jst_path %>'],

        tagName: 'div',

        id: '',

        className: '',
        
        events: {},

        initialize: function () {
            this.listenTo(this.collection, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template({ collection: this.collection.toJSON() }));
        }
    });

    return <%= _.classify(name) %>ViewList;
});
