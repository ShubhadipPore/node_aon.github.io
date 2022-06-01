// var mydb = require('../../config/db.config');
const url = require('url');
const queryObject = url.parse(req.url, true).query;

var devices = queryObject.DevId;
// mydb.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     mydb.query("CREATE DATABASE mydb", function (err, result) {
//       if (err) throw err;
//       console.log("Database created");
//     });
//   });

// var insertIntoTable = "INSERT INTO `hu`.`new_table1` (`DevId`, `BatVol`) VALUES ('AON1213', '58');";
// var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
// var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";

// CREATE TABLE `hu`.`new_table1` (`DevId` VARCHAR(255) NOT NULL,`BatVol` INT NOT NULL,PRIMARY KEY (`DevId`))
/*  Query to Create Table  */
const dbCreateTable = 'CREATE TABLE IF NOT EXISTS (devices) (`Devid` INT NOT NULL AUTO_INCREMENT,`BatVol` INT NOT NULL,PRIMARY KEY (`Devid`))';
/*  Query to Insert into Table  */

/*    */
/*    */


