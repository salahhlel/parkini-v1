const config = require("./config.js");
const mysql = require ('mysql2')




const connexion = mysql.createConnection(config)


connexion.connect(er=>{
    if (er){
    console.log(er)}
    else 
    console.log('conected')
  })


 module.export = connexion