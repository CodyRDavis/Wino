const controller = require('./users.controller');

const isAuth = require('../auth/isAuth').verify;

module.exports.initRoutes = (app) => {

    app.post('/users', (req,res,next) => {
        controller.createUser(req,res,next);
    });
    app.get('/users', isAuth, (req,res,next) => {
        res.status(200).json({
            success: false,
            message: "Connected to Users API: get"
        });
    });
    app.put('/users', isAuth, (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to USERS API: put"
        });
    });
    app.delete('/users', isAuth, (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to USERS API: delete"
        });
    });
    app.post('/login', (req,res,next) => {
        controller.userLogin(req,res,next);
    });
}
