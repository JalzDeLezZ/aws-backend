const fs = require('fs');

const errorLog = (err, req, res, next) => {
    
    const time = new Date();
    
    const date = 
        time.getFullYear() +
        "-" +
        (time.getMonth() + 1).toLocaleString('pt-Br', {minimumIntegerDigits: 2}) +
        "-" +
        time.getDate();
        
    const msg = `ERROR:
        ${err.stack}
    `;

    fs.appendFile(`./logs/${date}_request_logs.txt`, msg + "\n", err => {
        if (err) {
            console.error(err);
        }
    });
    next();
}

const logger = (req, res, next) => {
    const { method, url } = req;
    const { statusCode } = res;
    
    const time = new Date();

    const date = 
        time.getFullYear() +
        "-" +
        (time.getMonth() + 1).toLocaleString('pt-Br', {minimumIntegerDigits: 2}) +
        "-" +
        time.getDate();

    const moment =
        time.getFullYear() +
        "-" +
        (time.getMonth() + 1) +
        "-" +
        time.getDate() +
        " " +
        time.getHours() +
        ":" +
        time.getMinutes() +
        ":" +
        time.getSeconds();
    let msg = `[${moment}] ${method}:${url} (${statusCode})`;
    console.log(msg);

    fs.appendFile(`./logs/${date}_request_logs.txt`, msg + "\n", err => {
        if (err) {
            console.error(err);
        }
    });
    next();
};

module.exports = { logger, errorLog };