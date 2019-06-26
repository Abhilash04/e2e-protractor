import { element, by, protractor, browser } from "protractor"
import ReusableFunctions from "../framework_utils/reusable_functions";

export default class HomePage {

    props = require("../test_data/testdata")
    reusableFunc = new ReusableFunctions();

    private dashboard = element(by.xpath("//span[text()='Dashboard']"));
    // private error = element(by.xpath("//div[contains(text(), 'Wrong email or password')]"))
    private error = element(by.xpath("//div[contains(text(), 'Wrong email password')]"))

    public async verifyLoginSuccessful() {
        let flag = false;
        if (await this.reusableFunc.waitForElementToBePresent(this.dashboard)) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }

    public async loginErrorValidation() {
        let flag = false;
        if (await this.reusableFunc.waitForElementToBePresent(this.error)) {
            flag = true;
        } else {
            flag = false;
        }
        return flag;
    }
}