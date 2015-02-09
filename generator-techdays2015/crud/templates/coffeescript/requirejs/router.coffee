define [
  'jquery',
  'backbone',
  'models/<%= name %>',
  'collection/<%= name %>',
  'views/<%= name %>_list',
  'views/<%= name %>_details',
  'views/<%= name %>_create',
  'views/<%= name %>_edit',
], ($, Backbone, <%= _.classify(name) %>Model, <%= _.classify(name) %>Collection, <%= _.classify(name) %>ViewList, <%= _.classify(name) %>ViewDetails, <%= _.classify(name) %>ViewCreate, <%= _.classify(name) %>ViewEdit) ->
  class <%= _.classify(name) %>Router extends Backbone.Router
    routes: 
            '<%= name %>': 'list',
            '<%= name %>/:id': 'read',
            '<%= name %>/create': 'create',
            '<%= name %>/:id/edit': 'edit'

    list: () ->
        collection = new <%= _.camelize(appname) %>.Collections.<%= _.classify(name) %>()
        collection.fetch()

        view = new <%= _.classify(name) %>ViewList
            el: $("#main"),
            collection: collection

        view.render()

    read: () ->
        model = new <%= _.classify(name) %>Model
            id: id

        model.fetch()

        view = new <%= _.classify(name) %>ViewDetails
            el: $("#main"),
            model: model

        view.render();

    create: () ->
        model = new <%= _.classify(name) %>Model()
        view = new <%= _.classify(name) %>ViewCreate
            el: $("#main"),
            model: model

        view.render();

    edit: (id) ->
        model = new <%= _.classify(name) %>Model
            id: id
            
        model.fetch()

        view = new <%= _.classify(name) %>ViewEdit
            el: $("#main"),
            model: model

        view.render()
