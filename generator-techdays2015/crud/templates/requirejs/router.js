/*global define*/

define([
    'jquery',
    'backbone',
    'models/<%= name %>',
    'collection/<%= name %>',
    'views/<%= name %>_list',
    'views/<%= name %>_details',
    'views/<%= name %>_create',
    'views/<%= name %>_edit',
], function ($, Backbone, <%= _.classify(name) %>Model, <%= _.classify(name) %>Collection, <%= _.classify(name) %>ViewList, <%= _.classify(name) %>ViewDetails, <%= _.classify(name) %>ViewCreate, <%= _.classify(name) %>ViewEdit) {
    'use strict';

    var <%= _.classify(name) %>Router = Backbone.Router.extend({
        routes: {
            '<%= name %>': 'list',
            '<%= name %>/:id': 'read',
            '<%= name %>/create': 'create',
            '<%= name %>/:id/edit': 'edit'
        },

        list: function() {
            var collection = new <%= _.classify(name) %>Collection();
            collection.fetch();

            var view = new <%= _.classify(name) %>ViewList({
                el: $("#main"),
                collection: collection
            });

            view.render();
        },
        read: function(id) {
            var model = new <%= _.classify(name) %>Model({ id: id });
            model.fetch();

            var view = new <%= _.classify(name) %>ViewDetails({
                el: $("#main"),
                model: model
            });

            view.render();
        },
        create: function() {
            var model = new <%= _.classify(name) %>Model();
            var view = new <%= _.classify(name) %>ViewCreate({
                el: $("#main"),
                model: model
            });

            view.render();
        },
        edit: function(id) {
            var model = new <%= _.classify(name) %>Model({ id: id });
            model.fetch();

            var view = new <%= _.classify(name) %>ViewEdit({
                el: $("#main"),
                model: model
            });

            view.render();
        }
    });

    return <%= _.classify(name) %>Router;
});
