const controller = {}
const user = require('./users.model')

//BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

controller.createUser = (req, res, next) => {
    let data = req.body;
    let email = data.email.toLowerCase();

    //checking to see if email already exists in the Database
    user.findOne({email: email})
        .then( (result) => {
            //if email already in use
            if (result) {
                res.status(200).json({
                    success: false,
                    error: 400,
                    message: "Email already in use"
                });
            }
            //if email is not in use
            else {
                //hash the password
                bcrypt.hash(data.password, saltRounds, (err, hash)=> {
                    if (err) {
                        res.status(200).json({
                            success: false,
                            error: 500,
                            message: "Unable to create new user"
                        });
                    }
                    const newUser = new user({
                        firstName: data.firstName,
                        lastName: data.lastName,
                        email: email,
                        password: hash,
                        createdOn: Date.now(),
                        lastUpdate: Date.now()
                    })
                    console.log(newUser);
                    res.status(200).json({
                        success:true,
                        message: "new user",
                        data: newUser
                    })
                })//end bcrypt

            }//end else
        })//end findone.then
}

module.exports = controller;