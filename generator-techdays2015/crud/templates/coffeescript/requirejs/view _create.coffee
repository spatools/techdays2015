define [
  'jquery'
  'underscore'
  'backbone'
  'templates'
], ($, _, Backbone, JST) ->
  class <%= _.classify(name) %>ViewCreate extends Backbone.View
    template: JST['<%= jst_path %>']

    tagName: 'div'

    id: ''

    className: ''

    events:
        <% _.each(attrs, function (attr) { %>
        'change #<%= attr.name %>': "change_<%= attr.name %>"
        <% }); %>
        'submit #<%= name %>_edit_form': "save"

    initialize: () ->
        @listenTo @model, 'change', @render
        _.bindAll this, "save"<% if (attrs && attrs.length) { %>, <%= attrs.map(function(a) { return '"change_' + a.name + '"'; }).join(', ') %><% } %>

    render: () ->
        @$el.html @template(@model.toJSON())
    <% _.each(attrs, function (attr) { %>
    change_<%= attr.name %>: (e) ->
        val = $(e.currentTarget).val()
        @model.set "<%= attr.name %>", val
    <% }); %>
    save: () ->
        @model.save();