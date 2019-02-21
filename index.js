const express = require('express');
const app = express();
const port = 3001;

app.use((req,res,next) => {
    console.log("app used middleware...");
    next();
})

//routing - requie initRouting
require('./api/v1').initRouting(app)

//index
app.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "connected to home route"
    })
})

//LISTENING
app.listen(port, () => {
    console.log ("SERVER EAR on PORT " + port);
})
