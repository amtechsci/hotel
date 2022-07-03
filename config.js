var mysql = require('mysql');
var con = mysql.createConnection({host: "127.0.0.1",user: "root",password: "",database:"hotel"});
const config = {}
config.mysql = mysql,
config.port = 5003,
config.APP_URL = 'http://localhost:'+config.port+'/',
config.con = con;
module.exports = config;