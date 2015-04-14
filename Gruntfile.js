'use strict';

module.exports = function(grunt) {

    var path = require('path');

    // Project configuration.
    grunt.initConfig({
        concat: {
            default_options: {
                files: {
                    'index.html': ['templates/_header.html', 'templates/index.html', 'templates/_footer.html'],
                    'about.html': ['templates/_header.html', 'templates/about.html', 'templates/_footer.html'],
                    'registration.html': ['templates/_header.html', 'templates/registration.html', 'templates/_footer.html'],
                    'i-am-smart.html': ['templates/_header.html', 'templates/i-am-smart.html', 'templates/_footer.html'],
                    'speakers.html': ['templates/_header.html', 'templates/speakers.html', 'templates/_footer.html'],
                    'all.html': ['templates/_header.html', 'templates/all.html', 'templates/_footer.html'],
                    'place.html': ['templates/_header.html', 'templates/place.html', 'templates/_footer.html']
                }
            }
        }

    });

    // Actually load this plugin's task(s).
    //grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat']);

};
