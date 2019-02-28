module.exports.check = (req, res, next) => {
    data = req.body;
    //console.log(data);

    const emailRegex = /[a-zA-Z0-9]+@[a-zA-Z0-9\.]+\.[a-zA-Z0-9]{2,4}/;
    const regex = /[a-zA-Z0-9\.\-]/;
    const negativeRegex = /[\$\<\>\{\}\(\)]/;

    let checksPerformed = 0;
    let checksPassed = 0;


    for (var key in data){
        checksPerformed++;

        //console.log(data[key]);

        //EMAIL has unique requirements so checking it uniquely
        if (key === "email") {
            //checking to make sure email follows correct format, and doesnt contain forbidden characters
            if( data[key].match(emailRegex) && !data[key].match(negativeRegex)){
                //console.log("true from the email compare");
                checksPassed++;
            }
            else{
                //console.log("false from the email compare");
            }
        }
        //checking incoming data for accepted characters
        else{
            if( data[key].match(regex) ){
                //console.log("true from the compare");
                checksPassed++;
            }
            else {
                //console.log("false from the compair");
            }
        }
    }

    if(checksPerformed === checksPassed){
        next();
    }
    else{
        res.status(200).json({
            success: false,
            error: 300,
            message: "Data received was not in a usable format"
        });
    }
}
