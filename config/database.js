const mysql =require('mysql');

const dbConnection =mysql.createConnection({
    host:'sql6.freemysqlhosting.net',
    user:'sql6640334',
    password: 'LsdsU2eFHB',
    database:'sql6640334',
    insecureAuth : true
})

dbConnection.connect((error)=>{
    if(error){
        console.log("not connected",error)
    }
    else{
        console.log("Database Successfuly connected");
    }
})

module.exports =dbConnection;