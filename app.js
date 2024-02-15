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

//cors
const cors = require("cors");
app.use(cors({credentials:true , origin : true}))

//session and cookie

const session = require("express-session")
const cookieParser =  require("cookie-parser")

app.use(session({
    resave : true ,
    saveUninitialized : true ,
    secret : process.env.EXPRESS_SESSION_SECRET
}))

app.use(cookieParser());

// express file-upload 

const fileupload = require("express-fileupload");
app.use(fileupload());

// isLoggedIn
const {isLoggedIn} = require('./middlewares/isLoggedIn');
app.use(isLoggedIn);

//routes
app.use('/', require('./routes/homeRoutes'))
app.use("/student", require("./routes/indexRoutes"))
app.use("/resume", require("./routes/resumeRoutes"))
app.use("/employee", require("./routes/employeeRoutes"))




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