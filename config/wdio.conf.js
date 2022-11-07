const path = require('path');
const { generate } = require('multiple-cucumber-html-reporter');
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
const allureReporter = require('@wdio/allure-reporter').default
const allure = require('allure-commandline');
const video = require('wdio-video-reporter');
// require('dotenv').config();
// var browserstack = require('browserstack-local');

const { removeSync } = require('fs-extra');
const fs = require('fs');

// The below module is used for cucumber html report generation
const reporter = require('cucumber-html-reporter');
const currentTime = new Date().toJSON().replace(/:/g, "-");
// const sourceSpecDirectory = `tests/features/featureFiles`;
const jsonTmpDirectory = `reports/json`;

exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
    runner: 'local',
    

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    //
    // The specs are defined as an array of spec files (optionally using wildcards
    // that will be expanded). The test for each spec file will be run in a separate
    // worker process. In order to have a group of spec files run in the same worker
    // process simply enclose them in an array within the specs array.
    //
    // If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
    // then the current working directory is where your `package.json` resides, so `wdio`
    // will be called from there.
    //
    // specs: [
    //     './src/featureFiles/*.feature'
    // ],
    // Patterns to exclude.
    // exclude: [
        // 'path/to/excluded/files'
    // ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    // capabilities: [{

    //     // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    //     // grid with only 5 firefox instances available you can make sure that not more than
    //     // 5 instances get started at a time.
    //     maxInstances: 5,
    //     //
    //     browserName: 'chrome',
    //     acceptInsecureCerts: true
    //     // If outputDir is provided WebdriverIO can capture driver session logs
    //     // it is possible to configure which logTypes to include/exclude.
    //     // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    //     // excludeDriverLogs: ['bugreport', 'server'],
    // }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    // user: process.env.BROWSERSTACK_USERNAME,
    // key: process.env.BROWSERSTACK_ACCESS_KEY,
    // services: [
    //     ['browserstack', {
    //         browserstackLocal: true
    //     }]
    // ],
    // updateJob: false,
    // logLevels: {
    //     webdriver: 'debug',
    //     '@wdio/browserstack-service': 'debug'
    // },
    // outputDir: path.resolve(__dirname, '../reports/logs'),
    // coloredLogs: true,
    // screenshotPath: path.resolve(__dirname, '../screenshot'),
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: '',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [
        'appium'
    ],
    appium: {
        command: 'appium',
        args: {},
    },
    // port: 4723,
    // path: '/wd/hub',
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    cucumberOpts: {
        backtrace: false,
        requireModule: [],
        failAmbiguousDefinitions: false,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        // format: ['[pretty]'],
        // format: 'json:results.json',
        name: [],
        profile: [],
        // require: [
        //     './src/stepDefinitions/*.steps.js'
        // ],
        snippetSyntax: undefined,
        snippets: true,
        source: true,
        strict: false,
        tagsInTitle: false,
        timeout: 30000,
        retry: 0
    },
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
       reporters: [
           [
              'cucumberjs-json', {
               jsonFolder: jsonTmpDirectory,
               language: 'en',
           }
           ]
       ],

    // reporters: [
    //     [video, {
    //         saveAllVideos: false,       // If true, also saves videos for successful test cases
    //         videoSlowdownMultiplier: 3, // Higher to get slower videos, lower for faster videos [Value 1-100]
    //     }],
    //     ['allure', {
    //     outputDir: 'allure-results',
    //     disableWebdriverStepsReporting: true,
    //     disableWebdriverScreenshotsReporting: false,
    //     useCucumberStepReporter: true
    // }]
    // ],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: () => {
        // Remove the `tmp/` folder that holds the json report files
        removeSync(jsonTmpDirectory);
        if (!fs.existsSync(jsonTmpDirectory)){
            fs.mkdirSync(jsonTmpDirectory);
        }
    },

    // onPrepare: () => {
    //     // Remove the `tmp/` folder that holds the json report files
    //     removeSync('allure-results');
    //     if (!fs.existsSync('allure-results')){
    //         fs.mkdirSync('allure-results');
    //     }
    // },

    // onPrepare: function (config, capabilities) {
    // },
    // onPrepare: (config, capabilities) => {
    //     console.log("Connecting local");
    //     return new Promise( (resolve, reject) => {
    //       exports.bs_local = new browserstack.Local();
    //       exports.bs_local.start({'key': exports.config.key }, (error) => {
    //         if (error) return reject(error);
    //         console.log('Connected. Now testing...');
    
    //         resolve();
    //       });
    //     });
    //   },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
    //  before: function() {
    //     /**
    //      * Setup the Chai assertion framework
    //      */
    //     const chai    = require('chai');
    //     global.expect = chai.expect;
    //     global.assert = chai.assert;
    //     global.should = chai.should();
    //   },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
    // beforeTest: function (test, context) {
    //     browser.maximizeWindow();
    // },

    // beforeScenario: () => {
    //     browser.maximizeWindow();
    //   },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (test, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: async function (test, context, { error, result, duration, passed, retries }) {
    //     await browser.takeScreenshot();
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
    //  afterStep: async function (step, scenario, result, context) { // browser.takeScreenshot(); 
    //     if(!result.passed) { 
    //     await browser.takeScreenshot(); 
    //     console.log("A test has failed!"); 
    //     } 
    // },
    
//    afterStep: async (uri, feature, scenario) => {
//    if (scenario.passed === false) {
//        console.log("FAILEDss");
//        cucumberJson.attach(await driver.takeScreenshot(), "image/png");
//    }
//    },

    // afterStep:  async function (test, scenario, { error, duration, passed }) {
    // if (error) {
    //   await browser.takeScreenshot();
    // }
    //  },

    //  afterStep: async function (step, scenario, result, context) { // browser.takeScreenshot(); 
    //     if(!result.passed) { 
    //     await browser.takeScreenshot(); 
        
    //     console.log("A test has failed!"); } },

    // afterStep: async function (step, scenario, { error, duration, passed }, context) {
    // if (error) {
    //   browser.takeScreenshot();
    //   await driver.takeScreenshot();
    // }
    // },

    // afterStep: function (uri, feature, scenario, result, sourceLocation) {
    //     // if (result.status === 'failed') {
    //       browser.takeScreenshot();
    //     // }
    //   },




    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
     onComplete: () => {
        // Generate the report when it all tests are done
        generate({
          // Required
          // This part needs to be the same path where you store the JSON files
          // default = '.tmp/json/'
        jsonDir: jsonTmpDirectory,
        reportPath:`reports/html/`,
        openReportInBrowser: true,
        displayDuration: true,
        durationInSeconds: true,
        saveCollectedJSON: true,
        pageTitle: 'AGENT46',
        reportName: 'Automation Testing Results',         
          metadata:{
            browser: {
                name: 'chrome',
                version: '60'
            },
            device: 'Local test machine',
            platform: {
                name: 'ubuntu',
                version: '16.04'
            }
        },
        customData: {
            title: 'Run info',
            data: [
                {label: 'Project', value: 'Custom project'},
                {label: 'Release', value: '1.2.3'},
                {label: 'Cycle', value: 'B11221.34321'},
                {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
                {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
            ]
        }
    });
    }
    //  onComplete: () => {
    //     var reporter = require('cucumber-html-reporter');
    //     var options = {
    //       theme: 'bootstrap',
    //       jsonFile: jsonTmpDirectory,
    //       output: `reports/html/report-${currentTime}.html`,
    //       reportSuiteAsScenarios: true,
    //       scenarioTimestamp: true,
    //       launchReport: true,
    //       metadata: {
    //           "App Version":"0.3.2",
    //           "Test Environment": "STAGING",
    //           "Browser": "Chrome  54.0.2840.98",
    //           "Platform": "Windows 10",
    //           "Parallel": "Scenarios",
    //           "Executed": "Remote"
    //       },
    //     //   output: './report/cucumber_report.html',
    //     };
    //      reporter.generate(options);
    //    },

    //  onComplete: function() {
    //     const reportError = new Error('Could not generate Allure report')
    //     const generation = allure(['generate', 'allure-results', '--clean'])
    //     return new Promise((resolve, reject) => {
    //         const generationTimeout = setTimeout(
    //             () => reject(reportError),
    //             5000)

    //         generation.on('exit', function(exitCode) {
    //             clearTimeout(generationTimeout)

    //             if (exitCode !== 0) {
    //                 return reject(reportError)
    //             }

    //             console.log('Allure report successfully generated')
    //             resolve()
    //         })
    //     })
    // }
    //    onComplete: function(exitCode, config, capabilities, specs, results) {
    //        generate({
    //            jsonDir: './reports/json',
    //            reportPath: './reports/html',
    //            openReportInBrowser: true,
    //            displayDuration: true,
    //            durationInSeconds: true,
    //            saveCollectedJSON: true,
    //            pageTitle: 'AGENT46',
    //            reportName: 'Automation Testing Results',
    //        });
        // console.log("Closing local tunnel");
        //     return new Promise( (resolve, reject) => {
        //     exports.bs_local.stop( (error) => {
        //         if (error) return reject(error);
        //         console.log("Stopped BrowserStackLocal");

        //         resolve();
        //     });
        //     });
    //    },
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
