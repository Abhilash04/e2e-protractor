"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Logger() {
    var log4js = require("log4js");
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var MM = today.getMinutes();
    var ss = today.getSeconds();
    if (dd < 10) {
        dd = "0" + dd;
    }
    else if (mm < 10) {
        mm = "0" + mm;
    }
    var currentDate = dd + "_" + mm + "_" + yyyy;
    var currentTime = hh + "_" + MM + "_" + ss;
    log4js.configure({
        appenders: {
            console: {
                type: "console",
                category: "console"
            },
            file: {
                category: "test-file-appender",
                type: "file",
                filename: "e2e/logs/" + currentDate + "/Execution_Logs_" + currentTime + ".log",
                maxLogSize: 10240,
                backups: 3,
                pattern: "%d{dd/MM hh:mm} %-5p %m"
            }
        },
        categories: {
            default: { appenders: ["console", "file"], level: "DEBUG" },
            file: { appenders: ["file"], level: "DEBUG" }
        }
    });
    var log = log4js.getLogger("default");
    return log;
}
exports.default = Logger;
;
//# sourceMappingURL=log4jconfig.js.map