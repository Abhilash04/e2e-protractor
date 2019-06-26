"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: "jasmine2",
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000
    },
    seleniumAddress: "http://localhost:4444/wd/hub",
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: ['--start-maximized', 'disable-infobars']
        }
    },
    // capabilities: {
    //   "os": "OS X",
    //   "os_version": "Mojave",
    //   "browserName": "Safari",
    //   "browser_version": "12.0",
    //   "resolution": "1024x768"
    // },
    specs: ["../test_scripts/*.tests.js"],
    onPrepare: function () {
        var globals = require('protractor');
        var browser = globals.browser;
        browser.manage().window().maximize();
        browser.ignoreSynchronization = true;
        var AllureReporter = require("jasmine-allure-reporter");
        var reporter = new AllureReporter({
            resultsDir: './e2e/results'
        });
        jasmine.getEnv().addReporter(reporter);
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
        });
    }
};
//# sourceMappingURL=conf.js.map