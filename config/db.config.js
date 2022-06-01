var mysql = require('mysql');


var dbconnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: '3306',
    password: "Shubha@7",
    database: "hu",
    multipleStatements: true
});

dbconnect.connect(function(error) {
    if(error) {
        console.log("Database not connected"); }
    else{
        console.log('Database connected Successfully');
        // dbconnect.query("INSERT INTO `hu`.`new_table1` (`DevId`, `BatVol`) VALUES ('AON1218', '58')", function (err, result) {
        //     if (err) throw err;
        //     console.log("Table1 Inserted");
        //   });

    } 
    
})


module.exports = dbconnect;