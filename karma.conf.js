// Karma configuration
// Generated on Thu Jul 13 2017 12:26:53 GMT+0800 (台北標準時間)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/chai/chai.js',
      'src/*.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js':'coverage'
    },

	  plugins: [
		  'karma-mocha',
		  'karma-chrome-launcher',
		  'karma-coverage'
	  ],
	  coverageReporter: {
		  // cf. http://gotwarlost.github.com/istanbul/public/apidocs/
		  //type: 'lcov',
		  dir: 'report',
          subdir: function(browser){
            return 'converage/'+browser.toLowerCase().split(/[ /-]/)[0];
          },
          watermarks: {
            statements: [ 50, 75 ],
            functions: [ 50, 75 ],
            branches: [ 50, 75 ],
            lines: [ 50, 75 ]
          }
          // Would output the results into: './coverage/firefox/'
	  },
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
