const controller = {}
const user = require('./users.model');

//BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

//AUTH
const isAuth = require ('../auth/isAuth');

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
                            message: "new user created",
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

controller.authUser = (req, res, next) => {
    let data = req.body;
    let email = data.email.toLowerCase();

    //query database to find user
    user.findOne({email: email})
        .then( (result) => {
            if (!result){
                res.status(200).json({
                    success: false,
                    error: 400,
                    messag: "Email or Password incorrect"
                })
            }
            else {
                bcrypt.compare(data.password, result.password)
                    .then ( (result) => {
                        console.log(result);
                        if (!result){
                            res.status(200).json({
                                success: false,
                                error: 400,
                                message: "Email or Password incorrect"
                            });
                        }
                        else {

                            const payload = {
                                admin: result.admin,
                                email: result.email,
                                firstName: result.firstName,
                                lastName: result.lastName  
                            };
                            var token = isAuth.sign(payload);

                            res.json({
                                success: true,
                                message: 'Log In successful',
                                token: token
                            });
                        
                        }//end else
                    })//end bcrypt.compare then
            }//end else
        })
}

controller.testAuth = (req,res,next) => {
    
}

module.exports = controller;
