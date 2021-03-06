module.exports = function(grunt) {

    grunt.initConfig({

        webpack: {
            app: {
                entry: "./src/index.js",
                output: {
                    path: '.',
                    filename: "index.js"
                },
                devtool: 'source-map',
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            loader: "babel-loader"
                        }
                    ]
                },
                watch: false,
                keepalive: false,
                inline: true,
                failOnError: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.registerTask('default', ['webpack']);
};