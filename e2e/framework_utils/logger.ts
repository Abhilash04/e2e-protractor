import winston, { createLogger, format, transports } from 'winston';

var date = new Date();
const folderName = `${date.getDate()}_${date.getMonth()}_${date.getFullYear()}`
const fileName = `${date.getHours()}_${date.getMinutes()}_${date.getSeconds()}`
export class Logger {
    static loggerDetails = createLogger({
        level: "debug",
        format: format.combine(
            format.timestamp(),
            format.printf(info => {
                return `${info.timestamp} ${info.level}: ${info.message}`;
            })
        ),
        transports: [
            new transports.Console(),
            new transports.File({
                filename: `./e2e/logs/${folderName}/Execution_Logs_${fileName}.log`
            })
        ]
    })
}