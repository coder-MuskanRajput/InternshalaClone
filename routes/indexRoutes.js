const express = require("express");
const { homepage , 
    currentUser,
    studentsignup ,
    studentsignin,
    studentsignout
    } = require("../controllers/indexController");
const router = express.Router();


// GET /
router.get("/" , homepage)

//POST /student

router.post("/student" , isAuthenticated , currentUser)


// POST / student / signup 

router.post("/student/signup" , studentsignup)


// POST / student / signin 

router.post("/student/signin" , studentsignin)


// GET / student / signout

router.get("/student/signout" ,isAuthenticated, studentsignout)

module.exports = router;