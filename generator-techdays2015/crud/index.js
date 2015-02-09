'use strict';
var ScriptBase = require("generator-backbone/script-base");
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require("path");

module.exports = yeoman.generators.NamedBase.extend({
    constructor: function (name) {
        yeoman.generators.NamedBase.apply(this, arguments);

        this._importConfig();

        this.appname = this.config.get('appName') || path.basename(process.cwd());
        this.env.options.appPath = this.config.get('appPath') || 'app';

        this.options.coffee = this.config.get('coffee') || false;

        if (typeof this.env.options.coffee === 'undefined') {
            this.env.options.coffee = this.options.coffee;
        }

        // check if --requirejs option provided or if require is setup
        if (typeof this.env.options.requirejs === 'undefined') {
            this.option('requirejs');

            this.options.requirejs = this.config.get('includeRequireJS') || false;
            this.env.options.requirejs = this.options.requirejs;
        }

        // XXX default and banner to be implemented
        this.argument('attributes', {
            type: Array,
            defaults: [],
            banner: 'field[:type] field[:type]'
        });

        // parse back the attributes provided, build an array of attr
        this.attrs = this.attributes.map(function (attr) {
            var parts = attr.split(':');
            return {
                name: parts[0],
                type: parts[1] || 'string'
            };
        });
    },

    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        //var done = this.async();

        //// Have Yeoman greet the user.
        //this.log(yosay(
        //  'Welcome to the mathematical' + chalk.red('Techdays2015') + ' generator!'
        //));

        //var prompts = [{
        //    type: 'confirm',
        //    name: 'someOption',
        //    message: 'Would you like to enable this option?',
        //    default: true
        //}];

        //this.prompt(prompts, function (props) {
        //    this.someOption = props.someOption;

        //    done();
        //}.bind(this));
    },

    writing: {
        model: function () {
            this.log(this._getTemplatePath("model"));
            this.fs.copyTpl(
                this._getTemplatePath("model"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/models/" + this.name),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'models/' + this.name);
            }
        },
        collection: function () {
            this.fs.copyTpl(
                this._getTemplatePath("collection"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/collections/" + this.name),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'collections/' + this.name);
            }
        },
        router: function () {
            this.fs.copyTpl(
                this._getTemplatePath("router"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/routes/" + this.name),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'routes/' + this.name);
            }
        },

        view_list: function () {
            var jstPath = this.env.options.appPath + "/scripts/templates/" + this.name + "_list.ejs";

            this.fs.copyTpl(
                this._getTemplatePath("view_list"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/views/" + this.name + "_list"),
                { appname: this.appname, name: this.name, attrs: this.attrs, jst_path: jstPath }
            );

            this.fs.copyTpl(
                this.templatePath("view_list.ejs"),
                this.destinationPath(jstPath),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'views/' + this.name + "_list");
            }
        },
        view_details: function () {
            var jstPath = this.env.options.appPath + "/scripts/templates/" + this.name + "_details.ejs";

            this.fs.copyTpl(
                this._getTemplatePath("view_details"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/views/" + this.name + "_details"),
                { appname: this.appname, name: this.name, attrs: this.attrs, jst_path: jstPath }
            );

            this.fs.copyTpl(
                this.templatePath("view_details.ejs"),
                this.destinationPath(jstPath),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'views/' + this.name + "_details");
            }
        },
        view_create: function () {
            var jstPath = this.env.options.appPath + "/scripts/templates/" + this.name + "_create.ejs";

            this.fs.copyTpl(
                this._getTemplatePath("view_create"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/views/" + this.name + "_create"),
                { appname: this.appname, name: this.name, attrs: this.attrs, jst_path: jstPath }
            );

            this.fs.copyTpl(
                this.templatePath("view_create.ejs"),
                this.destinationPath(jstPath),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'views/' + this.name + "_create");
            }
        },
        view_edit: function () {
            var jstPath = this.env.options.appPath + "/scripts/templates/" + this.name + "_edit.ejs";

            this.fs.copyTpl(
                this._getTemplatePath("view_edit"),
                this._getDestinationPath(this.env.options.appPath + "/scripts/views/" + this.name + "_edit"),
                { appname: this.appname, name: this.name, attrs: this.attrs, jst_path: jstPath }
            );

            this.fs.copyTpl(
                this.templatePath("view_edit.ejs"),
                this.destinationPath(jstPath),
                { appname: this.appname, name: this.name, attrs: this.attrs }
            );

            if (!this.options.requirejs) {
                ScriptBase.prototype._addScriptToIndex.call(this, 'views/' + this.name + "_edit");
            }
        }
    },

    install: function () {
        //this.installDependencies({
        //    skipInstall: this.options['skip-install']
        //});
    },

    _importConfig: function() {
        var content = this.fs.readJSON(this.destinationPath(".yo-rc.json"));
        this.config.defaults(content["generator-backbone"]);
    },
    _getTemplatePath: function (file) {
        var filePath = "";

        if (this.options.coffee)
            filePath += "coffeescript/";

        if (this.options.requirejs)
            filePath += "requirejs/";

        filePath += file;
        filePath += "." + (this.options.coffee ? "coffee" : "js");

        return this.templatePath(filePath);
    },
    _getDestinationPath: function (file) {
        return this.destinationPath(file + (this.options.coffee ? ".coffee" : ".js"));
    }
});
