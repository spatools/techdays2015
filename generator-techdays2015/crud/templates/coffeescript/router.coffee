'use strict';

class <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %> extends Backbone.Router
    routes: 
            '<%= name %>': 'list',
            '<%= name %>/:id': 'read',
            '<%= name %>/create': 'create',
            '<%= name %>/:id/edit': 'edit'

    list: () ->
        collection = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>()
        collection.fetch()

        view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>List
            el: $("#main"),
            collection: collection

        view.render()

    read: () ->
        model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>
            id: id

        model.fetch()

        view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Details
            el: $("#main"),
            model: model

        view.render();

    create: () ->
        model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>()
        view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Create
            el: $("#main"),
            model: model

        view.render();

    edit: (id) ->
        model = new <%= _.camelize(appname) %>.Models.<%= _.classify(name) %>
            id: id
            
        model.fetch()

        view = new <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Edit
            el: $("#main"),
            model: model

        view.render()
