const {

  listVacancies,
} = require("./common.service");


module.exports = {
  getVacancies: (req, res) => {
    // const decode = jwt_decode(req.body.token);
    // req.body.user_id = decode.id;
    // req.body.role_id = decode.role_id;
    let data = req.body;

    if(data.category==='select category')
      data.category=''
    
    if(data.location==="select location")
    data.location=''
    listVacancies(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(400).json({
          success: 0,
          msg: "something went wrong",
          data: [],
        });
      } else {
        return res.status(200).json({
          success: 1,
          msg: "list of countries",
          data: results,
        });
      }
    });
  },


};
