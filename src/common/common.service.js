const dbConnection = require("../../config/database");

module.exports = {
  listVacancies: async (data, callBack) => {

   let extond=' where 1 '

    if(data.category!='' && data.category!=undefined&&data.category!=null)
    extond+=` and role ='${data.category}'`

    if(data.keyword!='' && data.keyword!=undefined&&data.keyword!=null)
    extond+=` and role like '%${data.keyword}%' `

    if(data.location!='' && data.location!=undefined&&data.location!=null&&data.location!='All')
    extond+=` and location ='${data.location}'`

// console.log('SELECT * FROM `job portal`.vacancy '+extond)
    dbConnection.query(
      'SELECT * FROM sql6640334.vacancy '+extond,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  

};
