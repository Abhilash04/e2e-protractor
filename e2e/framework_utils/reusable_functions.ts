import { element, by, protractor, browser, ElementFinder } from "protractor"
import { Logger } from "../framework_utils/logger";
// import Logger from "../framework_utils/log4jconfig"
// let logger = Logger();
let EC = protractor.ExpectedConditions;
let logger = Logger.loggerDetails;
let props = require("../test_data/testdata")
let timeout: number = props.commons.globalTimeout

export default class ReusableFunctions {

    public async waitForElementToBeVisible(elementIdentifier: ElementFinder) {
        let flag = false;
        try {
            await browser.wait(EC.visibilityOf(elementIdentifier), timeout)
            flag = true;
        } catch (err) {
            flag = false;
        }
        return flag;
    }

    public async waitForElementToBePresent(elementIdentifier: ElementFinder) {
        let flag = false;
        try {
            await browser.wait(EC.presenceOf(elementIdentifier), timeout)
            flag = true;
        } catch (err) {
            flag = false;
        }
        return flag;
    }

    public async waitForElementToBeClickable(elementIdentifier: ElementFinder) {
        let flag = false;
        try {
            await browser.wait(EC.elementToBeClickable(elementIdentifier), timeout)
            flag = true;
        } catch (err) {
            flag = false;
        }
        return flag;
    }

    public async enterText(element: ElementFinder, text: string) {
        try {
            if (this.waitForElementToBeVisible(element)) {
                await element.sendKeys(text);
                logger.info(`Entering text to the element and value is - ${text}`);
            }
        } catch (err) {
            logger.error(`Exception occured while entering text to the element - ${err.message}`);
        }
    }

    public async click(element: ElementFinder) {
        try {
            if (this.waitForElementToBeClickable(element)) {
                await element.click();
                logger.info(`Clicking on the element - ${element.locator()}`);
            }
        } catch (err) {
            logger.error(`Exception occured while clicking on the element - ${err.message}`);
        }
    }
}