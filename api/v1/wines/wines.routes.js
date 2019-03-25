const controller = require('./wines.controller.js')
const isAuth = require('../auth/isAuth').verify

module.exports.initRoutes = (app) => {

  app.put('/wines', isAuth, (req, res, next) =>{
    controller.updateWine(req, res, next);
  });
  app.get('/wines', isAuth, (req, res, next) => {
    controller.getWine(req, res, next);
  });
  app.post('/wines', isAuth, (req, res, next) => {
    controller.createWine(req, res, next);
  });
  app.delete('/wines', isAuth, (req, res, next) => {
    controller.deleteWine(req, res, next);
  });
}
