const controller = require('./users.controller');

const isAuth = require('../auth/isAuth');

module.exports.initRoutes = (app) => {

    app.post('/users', (req,res,next) => {
        controller.createUser(req,res,next);
    });
    app.get('/users', isAuth.verify, (req,res,next) => {
        res.status(200).json({
            success: false,
            message: "Connected to Users API: get"
        });
    });
    app.put('/users', (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to USERS API: put"
        });
    });
    app.delete('/users', (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to USERS API: delete"
        });
    });
    app.post('/login', (req,res,next) => {
        controller.authUser(req,res,next);
    });
}