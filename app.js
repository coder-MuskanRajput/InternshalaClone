require("dotenv").config({ path : "./.env"});
const express = require("express");
const app = express();


// DB Connection
require("./models/database").connectDatabase();

// const PORT = 3030;

//logger

const logger = require("morgan");
app.use(logger("tiny"));


//bodyparser 

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//routes
app.use("/", require("./routes/indexRoutes"))


//error handling
const ErrorHandler = require("./utils/ErrorHandler")
const {generatedErrors} = require("./middlewares/errors");

app.all("*" , (req,res,next) =>{
    next(new ErrorHandler(`requested URL Not found ${req.url}` , 404))
});

app.use(generatedErrors);
app.listen(
    process.env.PORT , 
    console.log(`server running on port ${process.env.PORT}`)
    );