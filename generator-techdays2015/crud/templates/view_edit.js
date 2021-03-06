/*global <%= _.camelize(appname) %>, Backbone, JST*/

<%= _.camelize(appname) %>.Views = <%= _.camelize(appname) %>.Views || {};

(function () {
    'use strict';

    <%= _.camelize(appname) %>.Views.<%= _.classify(name) %>Edit = Backbone.View.extend({

        template: JST['<%= jst_path %>'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            <% _.each(attrs, function (attr) { %>
            'change #<%= attr.name %>': "change_<%= attr.name %>",
            <% }); %>
            'submit #<%= name %>_edit_form': "save"
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            _.bindAll(this, "save"<% if (attrs && attrs.length) { %>, <%= attrs.map(function(a) { return '"change_' + a.name + '"'; }).join(', ') %><% } %>);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
        <% _.each(attrs, function (attr) { %>
        change_<%= attr.name %>: function (e) {
            var val = $(e.currentTarget).val();
            this.model.set("<%= attr.name %>", val);
        },
        <% }); %>
        save: function() {
            this.model.save();
        }
    });

})();
