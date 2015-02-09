module.exports = function (grunt) {

    grunt.registerMultiTask("versioning", function () {
        var path = require("path"),
            pkg = grunt.file.readJSON("package.json");

        this.files.forEach(function (file) {
            file.src.forEach(function (src) {
                var content = grunt.file.read(src),
                    destPath = path.join(file.dest, path.basename(src));

                if (content.indexOf("{{version}}") !== -1) {
                    content = content.replace(/\{\{version\}\}/g, pkg.version);

                    grunt.file.write(destPath, content);

                    grunt.log.ok("Version added to " + destPath);
                }
            });
        });
    });
};
