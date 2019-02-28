const express = require('express');
const app = express();
const port = 3001;

//MIDDLEWARE
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./api/v1/services/sanitize').check);

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
