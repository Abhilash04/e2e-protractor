"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var date = new Date();
var folderName = date.getDate() + "_" + date.getMonth() + "_" + date.getFullYear();
var fileName = date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds();
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.loggerDetails = winston_1.createLogger({
        level: "debug",
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.printf(function (info) {
            return info.timestamp + " " + info.level + ": " + info.message;
        })),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({
                filename: "./e2e/logs/" + folderName + "/Execution_Logs_" + fileName + ".log"
            })
        ]
    });
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map