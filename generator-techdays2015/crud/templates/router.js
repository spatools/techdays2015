/*global <%= _.camelize(appname) %>, Backbone*/

<%= _.camelize(appname) %>.Routers = <%= _.camelize(appname) %>.Routers || {};

(function () {
    'use strict';

    <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %> = Backbone.Router.extend({
        routes: {
            '<%= name %>': 'list',
            '<%= name %>/:id': 'read',
            '<%= name %>/create': 'create',
            '<%= name %>/:id/edit': 'edit'
        },

        list: function() {
            var collection = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>();
            collection.fetch();

            var view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>List({
                el: $("#main"),
                collection: collection
            });

            view.render();
        },
        read: function(id) {
            var model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>({ id: id });
            model.fetch();

            var view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Details({
                el: $("#main"),
                model: model
            });

            view.render();
        },
        create: function() {
            var model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>();
            var view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Create({
                el: $("#main"),
                model: model
            });

            view.render();
        },
        edit: function(id) {
            var model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>({ id: id });
            model.fetch();

            var view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Edit({
                el: $("#main"),
                model: model
            });

            view.render();
        }
    });

})();
