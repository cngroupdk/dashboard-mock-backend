/**
 * @author: ds
 * Created on: 20.10.2014
 */
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({
        watch: {
            express: {
                files: ['**/*.js'],
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },

        express: {
            options: {
                cmd: process.argv[0],
                background: true,
                port: 9292,
                node_env: undefined,
                delay: 0,
                output: ".+",
                debug: true
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'production'
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Task definition
    grunt.registerTask('default', ['express:dev', 'watch']);
};