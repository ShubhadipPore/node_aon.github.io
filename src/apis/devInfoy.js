
// var dbconnect = require('../../config/db.config');
// const url = require('url');
// const router = express.Router();


// function devInfoPost(req, res){
//     const queryObject = url.parse(req.url, true).query;
//     var DevId = queryObject.DevId;

//     if(typeof DevId == 'undefined' || DevId == null || DevId === ''){
//         console.log('Invalid data');
//     }else{
//         dbconnect.connect(function(error) {
//             if(error) {
//                 console.log("Database not connected"); }
//             else{
//                 console.log('Database create Successfully');
//                 dbconnect.query("INSERT INTO `hu`.`new_table1` (`DevId`, `BatVol`) VALUES ('AON1217', '58')", function (err, result) {
//                     if (err) throw err;
//                     console.log("Table1 data Inserted");
//                   });
        
//             } 
            
//         })
//     }
//     /* Generate Response JSON Here */
//     var data = {
//         DevId : DevId,
//         BatVol : 54
//     }
//     res.json(data);
//     res.status(200);
//     res.end();
// }
// router.post('/',devInfoPost);