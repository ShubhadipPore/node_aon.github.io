const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// app.use((req, res, next) =>{
//     const error = new Error('Not Found');
//     error.status = 404;
//     next(error);
// });

app.use((error, req, res, next) =>{
    res.status(error.status);
    res.json({
        error: {
            message: error.message
        }
    });
});
const DevInfo = require("./src/routers/devInfo");
app.use('/DeviceInfo', DevInfo);

const exportData = require("./src/routers/export");
app.use('/exportData', exportData);

const config = require("./src/routers/devConfig");
app.use('/devConfig', config);

module.exports = app;