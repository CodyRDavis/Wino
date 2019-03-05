
module.exports.checkToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    console.log (req.headers);
    console.log("Checking token",authHeader);
    if(typeof authHeader !== 'undefined') {
        return authHeader;
    }
    return null;

}
