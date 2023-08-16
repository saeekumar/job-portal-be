const mysql =require('mysql');

const dbConnection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'password',
    database:'job portal',
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