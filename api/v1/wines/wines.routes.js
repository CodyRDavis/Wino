const controller = require('./wines.controller.js')

module.exports.initRoutes = (app) => {

  app.post('/wines', controller.updateWine, (req, res, next) =>{
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: post"
    });
  });
  app.get('/wines', controller.getWine, (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: get"
    });
  });
  app.put('/wines', controller.createWine, (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: put"
    });
  });
  app.delete('/wines', controller.deleteWine, (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: delete"
    });
  });
}
