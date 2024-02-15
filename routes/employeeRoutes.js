const express = require("express");
const router = express.Router();

const { 
    homepage , 
    currentUser,
    employeeSignup ,
    employeeSignIn,
    employeeSignOut,
    employeeSendMail,
    employeeForgetLink,
    employeeResetPassword,
    employeeUpdate,
    employeeAvatar,
    createInternship,
    readInternship,
    readSingleInternship,
    createJob,
    readJob,
    readSingleJob,
    } = require("../controllers/employeeController");
const { isAuthenticated } = require("../middlewares/auth");


// GET /
router.get("/" , homepage)

//POST /employee

router.post("/current" , isAuthenticated , currentUser)


// POST / employee / signup 

router.post("/signup" , employeeSignup)


// POST / employee / signin 

router.post("/signIn" , employeeSignIn)


// GET / employee / signout

router.get("/signOut" ,isAuthenticated, employeeSignOut)


// POST / employee/send-mail

router.post("/send-mail" , employeeSendMail)

// GET /employee/forget-link/:employeeid

router.get("/forget-link/:id" , employeeForgetLink);

// POST /employee/reset-password/:employeeid

router.post("/reset-password/:id"  , isAuthenticated, employeeResetPassword);

// POST /employee/update/:employeeid

router.post("/update/:id"  , isAuthenticated, employeeUpdate);

// POST /employee/organizationLogo/:employeeid

router.post("/organization-logo/:id"  , isAuthenticated, employeeAvatar);


//====================== Internship ====================

// POST /employee/ internship / create

router.post("/internship/create"  , isAuthenticated, createInternship);

// POST /employee/ internship / read

router.post("/internship/read"  , isAuthenticated, readInternship);


// POST /employee/ internship /read /:id

router.post("/internship/read/:id"  , isAuthenticated, readSingleInternship);

//====================== job ====================

// POST /employee/ job / create

router.post("/job/create"  , isAuthenticated, createJob);

// POST /employee/ job / read

router.post("/job/read"  , isAuthenticated, readJob);

// POST /employee/ job /read /:id

router.post("/job/read/:id"  , isAuthenticated, readSingleJob);


module.exports = router;
