module.exports.initRouting = (app) => {
    require('./user/users.routes').initRoutes(app);
    require('./wines/wines.routes').initRoutes(app);
}
