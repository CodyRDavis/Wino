const controller = {}
const wines = require('./wines.model');

controller.updateWine = (req, res, next) => {
  let data = req.body;
  data.wineUpdate.lastUpdate = Date.now()
  //console.log("updateWine request body:", req.body);
  //check to see if in db
  wines.findOneAndUpdate(
    {_id: data._id},
    {$set: data.wineUpdate},
    {new:true},
    (err, result) => {
      //console.log("Error: ", err)
      //console.log("Result: ", result)
      if (err) {
        //if there was an error, return an uncsuccessful response with the error code
        res.status(400).json({
          success:false,
          message:"Mongoose Error"
        });
      } else if (result != null){
        //if a record in the database was updated, return a successful response
        //with the updated record
        res.status(200).json({
          success:true,
          data:result,
          mesage:""
        });
      } else {
        //if no record in the database was updated, return an unsuccessful response
        res.status(200).json({
          success:false,
          data:{},
          message:"No Document Found"
        });
      }
    });
};
controller.getWine = (req, res, next) => {
  let data = req.body;
  console.log("getWine request body:" + req.body);

  res.status(200).json({
    success: true,
    message: "Connected to WINES API: put"
  });
};
controller.createWine = (req, res, next) => {
  let data = req.body;
  console.log("createWine request body:" + req.body);

  //search to see if wine already exists
  wines.findOne(
    {wineTitle:data.wineTitle,
    wineVintage:data.wineVintage,
    wineProducer:data.wineProducer},
    (err, results)=> {
    if (err){
      //if there was an error, return an uncsuccessful response with the error code
      res.status(400).json({
        success:false,
        message:"Mongoose Error"
      });
    }
    else if (results != null) {
      //if this wine already exists in the database, return unsuccessful response
      res.status(200).json({
        success:false,
        data:{},
        message:"Document already exists in database"
      });
    }
    else {
      //if this wine doesn't already exist in the database, insert it and return
      //a successful response
      let newWine = new wines(data);
      newWine.save().then(
        res.status(200).json({
        success:true,
        data:data,
        })
      );
    }
  });
};
controller.deleteWine = (req, res, next) => {
  let data = req.body;
  console.log("deleteWine request body:" + req.body);
  res.status(200).json({
    success: true,
    message: "Connected to WINES API: delete"
  });
};
module.exports = controller;
