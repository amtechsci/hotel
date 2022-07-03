var mysql = require('mysql');
var con = mysql.createConnection({host: "127.0.0.1  ",user: "root",password: "Atul@#$%^&*0",database:"hotel"});
const config = {}
config.mysql = mysql,
config.port = 5003,
config.APP_URL = '54.201.12.52:'+config.port+'/',
config.con = con;
module.exports = config;