const controller = {}
const wines = require('./wines.model');

controller.updateWine = (req, res, next) => {
  let data = req.body;
  console.log("updateWine request body:" + req.body);
};
controller.getWine = (req, res, next) => {
  let data = req.body;
  console.log("updateWine request body:" + req.body);
};
controller.createWine = (req, res, next) => {
  let data = req.body;
  console.log("updateWine request body:" + req.body);
};
controller.deleteWine = (req, res, next) => {
  let data = req.body;
  console.log("updateWine request body:" + req.body);
};
module.exports = controller;
