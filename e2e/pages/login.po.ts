import { element, by, protractor, browser } from "protractor"
import ReusableFunctions from "../framework_utils/reusable_functions";
import HomePage from "./home.po";

let EC = protractor.ExpectedConditions;

export class LoginPage {

    testdata = require("../test_data/testdata")
    reusableFunc = new ReusableFunctions();

    private emailInput = element(by.id("email"));
    private passwordInput = element(by.id("password"));
    private loginButton = element(by.xpath("//button[contains(text(), 'SIGN IN')]"));

    public launchApplication() {
        browser.get(this.testdata.commons.siteurl)
        return this;
    }

    public async loginToApp(username: string, password: string) {
        await this.reusableFunc.enterText(this.emailInput, username);
        await this.reusableFunc.enterText(this.passwordInput, password);
        await this.reusableFunc.click(this.loginButton);
        return new HomePage();
    }
}