module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            root: {
                options: {
                    keepalive: true,
                    hostname: '*',
                    port: 8002
                }
            }
        }

    });

    grunt.registerTask('default', ['connect']);

};
