
const checkToken = (req, res, next) => {

    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
    }

    next();
}

modeul.export = checkToken