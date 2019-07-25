import { browser, element, by } from "protractor";
import { LoginPage } from "../pages/login.po"
import { Logger } from "../framework_utils/logger"

let logger = Logger.loggerDetails;

describe("Login MyStake Application", function () {
    let loginPage: LoginPage;
    let testdata = require("../test_data/testdata");

    beforeEach(async function () {
        browser.waitForAngularEnabled(false);
        loginPage = new LoginPage()
        await loginPage.launchApplication()
    });

    it(testdata.tc_001.name, async function () {
        const homePage = await loginPage.loginToApp(testdata.tc_001.username, testdata.tc_001.password);
        let result = await homePage.verifyLoginSuccessful();
        if (result) {
            logger.info("User logged in successfully.");
        } else {
            logger.error("User is unable to login.");
        }
        expect(result).toBe(true);
    });

    it(testdata.tc_002.name, async function () {
        const homePage = await loginPage.loginToApp(testdata.tc_002.username, testdata.tc_002.password);
        let result = await homePage.loginErrorValidation();
        if (result) {
            logger.info("Error message is getting displayed.");
        } else {
            logger.error("Error message is not getting displayed.");
        }
        expect(result).toBe(true);
    });

    afterEach(async function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
    });

});
