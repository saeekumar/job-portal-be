const mysql =require('mysql');

const dbConnection =mysql.createConnection({
    host:'ngr-database-1.chpdirp05dox.us-east-1.rds.amazonaws.com',
    user:'admin',
    password: 'Ngradmin!123',
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