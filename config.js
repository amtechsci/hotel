var mysql = require('mysql');
var con = mysql.createConnection({host: "hoteldb.c3teariwy0ra.us-west-2.rds.amazonaws.com",port:"3306",user: "admin",password: "Atul8800",database:"hoteldb"});
const config = {}
config.mysql = mysql,
config.port = 5003,
config.APP_URL = '54.201.12.52:'+config.port+'/',
config.con = con;
module.exports = config;