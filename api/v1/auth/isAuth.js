const jwt = require('jsonwebtoken');
const config = require('../../../config');

isAuth = {}

isAuth.sign = (payload) => {
    let token = jwt.sign(payload, config.secret, {
        expiresIn: '1d' // expires in 24 hours
    });

    return token;
}

isAuth.verify = (req, res, next) => {

    console.log (req.body);
    if (req.token){
        jwt.verify(req.token, config.secret, function(err, decoded) {
            if (err) console.log("Error: ", err);
            else {
                console.log("Decoded: ",decoded)
                res.status(200).json({
                    success: true,
                    message: decoded
                })
            }
        });
    }
    else {
        return (null)
    }
}
module.exports = isAuth;