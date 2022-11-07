const { config } = require('./wdio.conf');
const AndroidInfo = require('./android.info');
const path = require('path');

// Appium capabilities
config.capabilities = [
    {
        path: '/wd/hub',
        platformName: 'Android',
        // noReset: true,
        // fullReset: false,
        autoGrantPermissions: true,
        autoAcceptAlerts: true,
//        maxInstances: 1,
        automationName: 'flutter',
        deviceName: AndroidInfo.deviceName1(),
        platformVersion: AndroidInfo.platFormVersion1(),
        app: path.resolve(`./apps/${AndroidInfo.appName()}`),

        // systemPort: 8210
    }
    // ,
    // {
    //     platformName: 'Android',
    //     noReset: false,
    //     fullReset: false,
    //     autoGrantPermissions: true,
    //     autoAcceptAlerts: true,
    //     maxInstances: 2,
    //     automationName: 'uiautomator2',
    //     platformVersion: AndroidInfo.platFormVersion2(),
    //     app: path.resolve(`./apps/${AndroidInfo.appName()}`),
    //     systemPort: 8211
    // }
];

// config.cucumberOpts.tagExpression = '@androidApp'; // pass tag to run tests specific to android
config.sync = true;
config.port = 4723;

config.services = [
    'appium'
];

config.appium = {
    command: 'appium',
    args: {},
};

config.path = '/wd/hub';

// config.specs = [
//     './src/mobile/featureFiles/*.feature'
// ];

config.specs = [
        // './features/**/*.feature',
        './features/**/001_login.feature',
];

// config.suites = {
    // test_satu_tiga: [
    // [
    //     './features/**/030_Tapcash.feature',
    //     './features/**/031_Ovo.feature',
    //     './features/**/032_ShopeePay.feature',

    // ]]
    // ,
    // emi: [
    //    './src/mobile/featureFiles/login_phone.feature'
    // ]
// };

config.cucumberOpts = {
    failFast : true,
    dryrun : false,
    strict : false,
    require: [
        // './features/step-definitions/**/*.steps.js',
        // './features/step-definitions/*.js'
        './features/step-definitions/*.js','./features/support/*.js'
        // './features/step-definitions/01_login.steps.js',
        // './features/step-definitions/02_dashboard_guide.steps.js'
    ],
    timeout: 30000
};

exports.config = config;
