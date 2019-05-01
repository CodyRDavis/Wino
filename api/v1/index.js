module.exports.initRouting = (app) => {
    require('./user/users.routes').initRoutes(app);
    require('./wines/wines.routes').initRoutes(app);
    require('./reviews/reviews.routes').initRoutes(app);
}
