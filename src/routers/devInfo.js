const express = require('express');
const dbconnect = require('../../config/db.config');
const router = express.Router();
const url = require('url');
const mysql = require('mysql');


// const dbquery = require('../../src/mysql_db/db.dquery');

router.post('/', (req,res,next) =>{                /* GET API for Device Information */
    // const req.body = url.parse(req.url, true).query;
    const devices = req.body.DevId;

    if(typeof devices == 'undefined' || devices == null || devices === ''){
        console.log('Invalid data');
    }else{
        
        const tempQ = 'CREATE TABLE IF NOT EXISTS ';
        const tempR = '(`SlNo` INT NOT NULL AUTO_INCREMENT,`BatVol` LONG NOT NULL,`DischargeStatus` INT(1) NOT NULL,`DischargeCurrent` LONG NOT NULL,`ChargerStatus` INT(1) NOT NULL,`ChargingCurrent` LONG NOT NULL,`CellVolt1` LONG NOT NULL,`CellVolt2` LONG NOT NULL,`CellVolt3` LONG NOT NULL,`CellVolt4` LONG NOT NULL,`CellVolt5` LONG NOT NULL,`CellVolt6` LONG NOT NULL,`CellVolt7` LONG NOT NULL,`CellVolt8` LONG NOT NULL,`CellVolt9` LONG NOT NULL,`CellVolt10` LONG NOT NULL,`CellVolt11` LONG NOT NULL,`CellVolt12` LONG NOT NULL,`CellVolt13` LONG NOT NULL,`CellVolt14` LONG NOT NULL,`CellVolt15` LONG NOT NULL,`CellVolt16` LONG NOT NULL,`BallStat1` INT(1) NOT NULL,`BallStat2` INT(1) NOT NULL,`BallStat3` INT(1) NOT NULL,`BallStat4` INT(1) NOT NULL,`BallStat5` INT(1) NOT NULL,`BallStat6` INT(1) NOT NULL,`BallStat7` INT(1) NOT NULL,`BallStat8` INT(1) NOT NULL,`BallStat9` INT(1) NOT NULL,`BallStat10` INT(1) NOT NULL,`BallStat11` INT(1) NOT NULL,`BallStat12` INT(1) NOT NULL,`BallStat13` INT(1) NOT NULL,`BallStat14` INT(1) NOT NULL,`BallStat15` INT(1) NOT NULL,`BallStat16` INT(1) NOT NULL,`SOC` LONG NOT NULL,`TempraturePCB` LONG NOT NULL,`Temprature1` LONG NOT NULL,`Temprature2` LONG NOT NULL,`Temprature3` LONG NOT NULL,`OVFault` INT(1) NOT NULL,`UVFault` INT(1) NOT NULL,`TempFault` INT(1) NOT NULL,`TempSensorFault` INT(1) NOT NULL,`OLFault` INT(1) NOT NULL,`RTCFault` INT(1) NOT NULL,`CHGFault` INT(1) NOT NULL,`FanStatus` INT(1) NOT NULL,`DisMosStatus` INT(1) NOT NULL,`ChgMosStatus` INT(1) NOT NULL,`GSMStatus` INT(1) NOT NULL,`CloudStatus` INT(1) NOT NULL,`StorageStatus` INT NOT NULL, PRIMARY KEY (`SlNo`))';
        const tempF = tempQ.concat(devices,tempR);     
     
        dbconnect.query(tempF,   function (err, result) {
            if (err) throw err;
            console.log("Data Inserted Successfully");
          });           

        const tempA = `INSERT INTO `;
        const tempB = ' (BatVol,DischargeStatus,DischargeCurrent,ChargerStatus,ChargingCurrent,CellVolt1,CellVolt2,CellVolt3,CellVolt4,CellVolt5,CellVolt6,CellVolt7,CellVolt8,CellVolt9,CellVolt10,CellVolt11,CellVolt12,CellVolt13,CellVolt14,CellVolt15,CellVolt16,BallStat1,BallStat2,BallStat3,BallStat4,BallStat5,BallStat6,BallStat7,BallStat8,BallStat9,BallStat10,BallStat11,BallStat12,BallStat13,BallStat14,BallStat15,BallStat16,SOC,TempraturePCB,Temprature1,Temprature2,Temprature3,OVFault,UVFault,TempFault,TempSensorFault,OLFault,RTCFault,CHGFault,FanStatus,DisMosStatus,ChgMosStatus,GSMStatus,CloudStatus,StorageStatus)VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'; 
        const tempC = tempA.concat(devices,tempB);
        const ddata = ([req.body.BatVol,req.body.DischargeStatus,req.body.DischargeCurrent,req.body.ChargerStatus,req.body.ChargingCurrent,req.body.CellVolt1,req.body.CellVolt2,req.body.CellVolt3,req.body.CellVolt4,req.body.CellVolt5,req.body.CellVolt6,req.body.CellVolt7,req.body.CellVolt8,req.body.CellVolt9,req.body.CellVolt10,req.body.CellVolt11,req.body.CellVolt12,req.body.CellVolt13,req.body.CellVolt14,req.body.CellVolt15,req.body.CellVolt16,req.body.BallStat1,req.body.BallStat2,req.body.BallStat3,req.body.BallStat4,req.body.BallStat5,req.body.BallStat6,req.body.BallStat7,req.body.BallStat8,req.body.BallStat9,req.body.BallStat10,req.body.BallStat11,req.body.BallStat12,req.body.BallStat13,req.body.BallStat14,req.body.BallStat15,req.body.BallStat16,req.body.SOC,req.body.TempraturePCB,req.body.Temprature1,req.body.Temprature2,req.body.Temprature3,req.body.OVFault,req.body.UVFault,req.body.TempFault,req.body.TempSensorFault,req.body.OLFault,req.body.RTCFault,req.body.CHGFault,req.body.FanStatus,req.body.DisMosStatus,req.body.ChgMosStatus,req.body.GSMStatus,req.body.CloudStatus,req.body.StorageStatus]);
        dbconnect.query(tempC, ddata, function (err, result) {
                if (err) throw err;
                console.log("Table Created  for New  Device");
              });
    }

    var data = {
        DevId :  req.body.DevId,
        BatVol : req.body.BatVol,
        message : 'GetConfig Done'
    }                                               /* Generate Response JSON Here */
    res.json(data);
    res.status(200);
    res.end();
    res.status(200).json({
        message: "Device Information GET Successful"
    });
    

});

router.get('/', (req,res,next) =>{              /* POST API for Device Information */
    const device = {
        DevId: req.body.DevId,
        BatVol: req.body.BatVol
    };
    dbconnect.query('CREATE TABLE IF NOT EXISTS devices (`DevId` VARCHAR(255) NOT NULL,`BatVol` INT NOT NULL,PRIMARY KEY (`DevId`))', function (err, result) {
        if (err) throw err;
        console.log("Table Created for New Device");
      });                                       /* Create new TABLE when new Device post request */

    const sql = `INSERT INTO new_table1 (DevId, BatVol)VALUES(?,?)`;
    const ddata = [req.body.DevId, req.body.BatVol];

    dbconnect.query(sql,ddata, function (err, result) {
            if (err) throw err;
            console.log("Data Inserted Successfully");
          });                                   /* Insert Device information into Particular Table */
    
    res.status(200).json({
        message: "Device Information POST Successful",
        device: device
    });

});

module.exports = router;