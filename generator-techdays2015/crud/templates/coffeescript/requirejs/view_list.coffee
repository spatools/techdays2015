define [
  'jquery'
  'underscore'
  'backbone'
  'templates'
], ($, _, Backbone, JST) ->
  class <%= _.classify(name) %>ViewDetails extends Backbone.View
    template: JST['<%= jst_path %>']

    tagName: 'div'

    id: ''

    className: ''

    events: {}

    initialize: () ->
        @listenTo @collection, 'change', @render

    render: () ->
        @$el.html @template({ collection: @collection.toJSON() })
