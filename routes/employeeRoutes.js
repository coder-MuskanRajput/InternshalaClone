const express = require("express");
const router = express.Router();

const { 
    
    homepage , 
    currentEmployee,
    employeesignup ,
    employeesignin,
    employeesignout,
    // employeesendmail,
    // employeeforgetlink,
    // employeeresetpassword,
    // employeeupdate,
    // employeeavatar,

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


// // POST / employee/send-mail

// router.post("/employee/send-mail" , employeesendmail)

// // GET /employee/forget-link/:employeeid

// router.get("/employee/forget-link/:id" , employeeforgetlink);

// // POST /employee/reset-password/:employeeid

// router.post("/employee/reset-password/:id"  , isAuthenticated, employeeresetpassword);

// // POST /employee/update/:employeeid

// router.post("/employee/update/:id"  , isAuthenticated, employeeupdate);

// // POST /employee/avatar/:employeeid

// router.post("/employee/avatar/:id"  , isAuthenticated, employeeavatar);

module.exports = router;
