const controller = {}
const user = require('./users.model')

//BCRYPT
const bcrypt = require('bcrypt');
const saltRounds = 10;

controller.createUser = (req, res, next) => {
    let data = req.body;
    let email = data.email.toLowerCase();
    
    //checking to see if email already exists in the Database
    if(!controller.sanitizeInput(data)){
        res.status(200).json({
            success: false,
            error: 400,
            message: "Data was in unaccepted format"
        })
    }
    else{
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
                            console.log(newUser);
                            res.status(200).json({
                                success:true,
                                message: "new user",
                                data: newUser
                            })
                        }
                    })//end bcrypt

                }//end else
            })//end findone.then
    }
}

controller.sanitizeInput = (user) => {
    console.log(user)
    let screenPass = true;
    let emailFormat = /[a-zA-Z0-9\.-]+@[\w\.]+\.\w{2,4}/
    let forbidden = /[$\<\>]/
    let stringFormat = /[^$\<\>]/
    console.log("FOrbidden", forbidden.test(user.email))
    if(!emailFormat.test(user.email) || forbidden.test(user.email)){
        console.log("Invalid email format");
        console.log(user.email);
        screenPass =false
    }
    if(!stringFormat.test(user.firstName) ||
        !stringFormat.test(user.lastName)){
            console.log("invalid string format");
            screenPass= false
        }
    console.log(screenPass);
    return screenPass;
}
module.exports = controller;