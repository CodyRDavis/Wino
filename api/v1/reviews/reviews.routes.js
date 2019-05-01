const controller = require('./reviews.controller');

const isAuth = require('../auth/isAuth').verify;

module.exports.initRoutes = (app) => {

    app.post('/reviews', (req,res,next) => {
        controller.createReview(req,res,next);
    });
    app.get('/reviews', isAuth, (req, res, next) => {
        res.status(200).json({
            success: true,
            message: "Connected to REVIEWS API: GET"
        });
    });
    app.put('/reviews', isAuth, (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to REVIEWS API: PUT"
        });
    });
    app.delete('/reviews', isAuth, (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to REVIEWS API: DELETE"
        });
    })
}