const controller = {}
const wines = require('./wines.model');

controller.updateWine = (req, res, next) => {
  let data = req.body;
  console.log("updateWine request body:" + req.body);
  res.status(200).json({
    success: true,
    message: "Connected to WINES API: post"
  });
};
controller.getWine = (req, res, next) => {
  let data = req.body;
  console.log("getWine request body:" + req.body);
  res.status(200).json({
    success: true,
    message: "Connected to WINES API: get"
  });
};
controller.createWine = (req, res, next) => {
  let data = req.body;
  console.log("createWine request body:" + req.body);
  res.status(200).json({
    success: true,
    message: "Connected to WINES API: put"
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
