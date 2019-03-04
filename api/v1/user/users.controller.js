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
                console.log(result)
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
                    //err is only available if problem hashing password.
                    if (err) {
                        console.log (err)
                        res.status(200).json({
                            success: false,
                            error: 500,
                            message: "Unable to create new user"
                        });
                    }
                    else {
                        //populating user with incoming data. should sanitize data first.
                        const newUser = new user({
                            firstName: data.firstName,
                            lastName: data.lastName,
                            email: email,
                            password: hash,
                            createdOn: Date.now(),
                            lastUpdate: Date.now()
                        })

                        //saving new user to the database.
                        newUser.save();

                        //for develpment only- making sure newUser looks how its expected
                        console.log(newUser);
                        //editing password to be unreadable before sending it off.
                        res.status(200).json({
                            success:true,
                            message: "new user",
                            data: {
                                firstName: newUser.firstName,
                                lastName: newUser.lastName,
                                email: newUser.email,
                                password: "**********",
                                createdOn: newUser.createdOn,
                                lastUpdate: newUser.lastUpdate
                            }
                        })
                    }
                })//end bcrypt

            }//end else
        })//end findone.then
}

module.exports = controller;