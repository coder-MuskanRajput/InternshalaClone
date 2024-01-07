const express = require("express");
const router = express.Router();

const { 
    homepage , 
    currentEmployee,
    employeesignup ,
    employeesignin,
    employeesignout,
    employeesendmail,
    employeeforgetlink,
    employeeresetpassword,
    employeeupdate,
    employeeavatar,
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

router.post("/current" , isAuthenticated , currentEmployee)


// POST / employee / signup 

router.post("/signup" , employeesignup)


// POST / employee / signin 

router.post("/signin" , employeesignin)


// GET / employee / signout

router.get("/signout" ,isAuthenticated, employeesignout)


// POST / employee/send-mail

router.post("/send-mail" , employeesendmail)

// GET /employee/forget-link/:employeeid

router.get("/forget-link/:id" , employeeforgetlink);

// POST /employee/reset-password/:employeeid

router.post("/reset-password/:id"  , isAuthenticated, employeeresetpassword);

// POST /employee/update/:employeeid

router.post("/update/:id"  , isAuthenticated, employeeupdate);

// POST /employee/organizationLogo/:employeeid

router.post("/organization-logo/:id"  , isAuthenticated, employeeavatar);


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
