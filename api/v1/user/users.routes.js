module.exports.initRoutes = (app) => {

    app.post('/users', (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to USERS API: post"
        });
    });
    app.get('/users', (req,res,next) => {
        res.status(200).json({
            success: true,
            message: "Connected to USERS API: get"
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
}