const mysql = require('mysql2')


const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '10519970',
    database : 'parkini'
  });
  
   connection.connect(err=>{
    if (err){
      console.log(err);
    }
    console.log('connected')
   })
  
  module.exports = connection;