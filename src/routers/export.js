const express = require('express');
const dbconnect = require('../../config/db.config');
const router = express.Router();
const url = require('url');


router.get('/', (req,res,next) =>{                /* GET API for Device Information */
    const queryObject = url.parse(req.url, true).query;
    var devId = queryObject.DevId;
    if(typeof devId == 'undefined' || devId == null || devId === ''){
        console.log('Invalid data');
    }else{
        const devices = ([queryObject.DevId]);
        const path = ([queryObject.Path]);
         const tempSemicolon = '"';
         const tempComma = ';'
         const tempNL = '\r\n'   
        const tempA = `SELECT SlNo,BatVol,DischargeStatus,DischargeCurrent,ChargerStatus,ChargingCurrent,CellVolt1,CellVolt2,CellVolt3,CellVolt4,CellVolt5,CellVolt6,CellVolt7,CellVolt8,CellVolt9,CellVolt10,CellVolt11,CellVolt12,CellVolt13,CellVolt14,CellVolt15,CellVolt16,BallStat1,BallStat2,BallStat3,BallStat4,BallStat5,BallStat6,BallStat7,BallStat8,BallStat9,BallStat10,BallStat11,BallStat12,BallStat13,BallStat14,BallStat15,BallStat16,SOC,TempraturePCB,Temprature1,Temprature2,Temprature3,OVFault,UVFault,TempFault,TempSensorFault,OLFault,RTCFault,CHGFault,FanStatus,DisMosStatus,ChgMosStatus,GSMStatus,CloudStatus,StorageStatus FROM `;
        const tempB = 'INTO OUTFILE ? '; 
        // const tempC = 'FIELDS ENCLOSED BY ';
        // const tempD = 'TERMINATED BY ';
        // const tempE = 'ESCAPED BY ';
        // const tempF = 'LINES TERMINATED BY \r\n ';

        const tempD = 'FIELDS ENCLOSED BY ? TERMINATED BY ? ESCAPED BY ? LINES TERMINATED BY ?';
        const tempP = tempA.concat(devices,tempB,tempD);
        
        // const ddata = ([queryObject.BatVol,queryObject.DischargeStatus,queryObject.DischargeCurrent,queryObject.ChargerStatus,queryObject.ChargingCurrent,queryObject.CellVolt1,queryObject.CellVolt2,queryObject.CellVolt3,queryObject.CellVolt4,queryObject.CellVolt5,queryObject.CellVolt6,queryObject.CellVolt7,queryObject.CellVolt8,queryObject.CellVolt9,queryObject.CellVolt10,queryObject.CellVolt11,queryObject.CellVolt12,queryObject.CellVolt13,queryObject.CellVolt14,queryObject.CellVolt15,queryObject.CellVolt16,queryObject.BallStat1,queryObject.BallStat2,queryObject.BallStat3,queryObject.BallStat4,queryObject.BallStat5,queryObject.BallStat6,queryObject.BallStat7,queryObject.BallStat8,queryObject.BallStat9,queryObject.BallStat10,queryObject.BallStat11,queryObject.BallStat12,queryObject.BallStat13,queryObject.BallStat14,queryObject.BallStat15,queryObject.BallStat16,queryObject.SOC,queryObject.TempraturePCB,queryObject.Temprature1,queryObject.Temprature2,queryObject.Temprature3,queryObject.OVFault,queryObject.UVFault,queryObject.TempFault,queryObject.TempSensorFault,queryObject.OLFault,queryObject.RTCFault,queryObject.CHGFault,queryObject.FanStatus,queryObject.DisMosStatus,queryObject.ChgMosStatus,queryObject.GSMStatus,queryObject.CloudStatus,queryObject.StorageStatus]);
        dbconnect.query(tempP, path, tempSemicolon,tempComma, tempSemicolon, tempNL, function (err, result) {
            if (err) throw err;
            console.log("Data Inserted Successfully");
          });
    }                                             
    res.status(200);
    res.end();
    res.status(200).json({
        message: "Device Information GET Successful"
    });
});

module.exports = router;