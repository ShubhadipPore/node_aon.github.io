const express = require('express');
const dbconnect = require('../../config/db.config');
const router = express.Router();
const url = require('url');
const mysql = require('mysql');


router.post('/', (req,res,next) =>{              /* POST API for Device Configaration */
    const device = {
        DevId: req.body.DevId,
        BatVol: req.body.BatVol
    };
    dbconnect.query('CREATE TABLE IF NOT EXISTS configaration (`DevId` VARCHAR(255) NOT NULL,`UVcutoff` LONG NOT NULL, `LVcutoff` LONG NOT NULL,`Tempcutoff` LONG NOT NULL,`maxDisChrgCur` LONG NOT NULL,`maxDisChrgDuration` LONG NOT NULL,`balEnVol` LONG NOT NULL,`balInterval` LONG NOT NULL,PRIMARY KEY (`DevId`))', function (err, result) {
        if (err) throw err;
        console.log("Table Created for New Device");
      });                                       /* Create new TABLE when new Device Configaration post request */

    const sql = `INSERT INTO configaration (DevId, UVcutoff, LVcutoff, Tempcutoff, maxDisChrgCur, maxDisChrgDuration, balEnVol, balInterval)VALUES(?,?,?,?,?,?,?,?)`;
    const ddata = [req.body.DevId, req.body.UVcutoff, req.body.LVcutoff, req.body.Tempcutoff, req.body.maxDisChrgCur, req.body.maxDisChrgDuration, req.body.balEnVol, req.body.balInterval,];

    dbconnect.query(sql,ddata, function (err, result) {
            if (err) throw err;
            console.log("Data Inserted Successfully");
          });                                   /* Insert Device Configaration into Particular Table */
    
    res.status(200).json({
        message: "Device Information POST Successful",
        device: device
    });

});


router.get('/', (req,res,next) =>{              /* POST API for Device Configaration */
    const device = {
        DevId: req.body.DevId,
        BatVol: req.body.BatVol
    };
    dbconnect.query("SELECT * FROM configaration WHERE DevId = ?",req.body.DevId, function (err, result) {
        if (err) throw err;
        console.log(result);
      });                                       /* Create new TABLE when new Device Configaration post request */


    
    res.status(200).json({
        message: "Device Information POST Successful",
        device: device
    });

});

module.exports = router;