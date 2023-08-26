const mysql = require('mysql');
// const { config } = require('process');
// konfig
const conn = mysql.createConnection( config: {
  host : "127.0.0.1::3306",
  user : "admin",
  database : "mastersbookdb",
  password : "Kostia2002"
});
conn.connect( options: err => {
  if(err){
    console.log('error');
  }
  else {
    console.log('DB -- Ok');
  }
});