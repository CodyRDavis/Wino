
module.exports.checkToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    if(typeof authHeader !== 'undefined') {
        return authHeader;
    }
    return null;

}
