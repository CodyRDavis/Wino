const jwt = require('jsonwebtoken');
const config = require('../../../config');
const tokenReader = require('../services/tokenReader');

isAuth = {}

isAuth.sign = (payload) => {
    let token = jwt.sign(payload, config.secret, { expiresIn: '1d' });

    return token;
}

isAuth.verify = (req, res, next) => {
    //creating req.token for access later
    req.token = tokenReader.checkToken(req);

    if (req.token){
        jwt.verify(req.token, config.secret, function(err, decoded) {
            if (err){
                res.status(200).json({
                    success: false,
                    error: 400,
                    message: "Unauthorized Access"
                });
            }
            else {
                //console.log(decoded);
                req.user = decoded;
                return next();
            }
        });
    }
    else {
        res.status(200).json({
            success: false,
            error: 400,
            message: "Unauthorized Access"
        });
    }
}
module.exports = isAuth;