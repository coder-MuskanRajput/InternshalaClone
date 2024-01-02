require("dotenv").config({ path : "./.env"});
const express = require("express");
const app = express();
// const PORT = 3030;

//logger

const logger = require("morgan");
app.use(logger("tiny"));

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