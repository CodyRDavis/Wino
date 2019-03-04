const controller = require('./wines.controller.js')

module.exports.initRoutes = (app) => {

  app.post('/wines', controller.createWine, (req, res, next) =>{
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: post"
    });
  });
  app.get('/wines', (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: get"
    });
  });
  app.put('/wines', (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: put"
    });
  });
  app.delete('/users', (req, res, next) => {
    res.status(200).json({
      success: true,
      message: "Connected to WINES API: delete"
    });
  });
}
