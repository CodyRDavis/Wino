module.exports.initRouting = (app) => {
    require('./user/users.routes').initRoutes(app);
}