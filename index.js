const express = require('express');
const app = express();
const port = 3001;

app.use((req,res,next) => {
    console.log("app used middleware...");
    next();
})
//MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routing - requrie initRouting
require('./api/v1').initRouting(app)

//services - require initSevices
//mongodb - mongoose
require('./api/v1/services/mongo').initMongo();

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
