"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var reusable_functions_1 = __importDefault(require("../framework_utils/reusable_functions"));
var home_po_1 = __importDefault(require("./home.po"));
var EC = protractor_1.protractor.ExpectedConditions;
var LoginPage = /** @class */ (function () {
    function LoginPage() {
        this.testdata = require("../test_data/testdata");
        this.reusableFunc = new reusable_functions_1.default();
        this.emailInput = protractor_1.element(protractor_1.by.id("email"));
        this.passwordInput = protractor_1.element(protractor_1.by.id("password"));
        this.loginButton = protractor_1.element(protractor_1.by.xpath("//button[contains(text(), 'SIGN IN')]"));
    }
    LoginPage.prototype.launchApplication = function () {
        protractor_1.browser.get(this.testdata.commons.siteurl);
        return this;
    };
    LoginPage.prototype.loginToApp = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.reusableFunc.enterText(this.emailInput, username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.reusableFunc.enterText(this.passwordInput, password)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.reusableFunc.click(this.loginButton)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, new home_po_1.default()];
                }
            });
        });
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.po.js.map