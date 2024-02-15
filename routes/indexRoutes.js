const express = require("express");
const router = express.Router();

const { 
    
    homepage , 
    currentUser,
    studentSignup ,
    studentSignin,
    studentSignOut,
    studentsendmail,
    studentForgetLink,
    studentResetPassword,
    studentUpdate,
    studentAvatar,
    applyInternship,
    applyJob
    } = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");


// GET /
router.get("/" , homepage)

//POST /student

router.post("/student" , isAuthenticated , currentUser)


// POST / student / signup 

router.post("/student/signup" , studentSignup)


// POST / student / signin 

router.post("/student/signin" , studentSignin)


// GET / student / signout

router.get("/student/signout" ,isAuthenticated, studentSignOut)


// POST / student/send-mail

router.post("/student/send-mail" , studentsendmail)

// GET /student/forget-link/:studentid

router.get("/student/forget-link/:id" , studentForgetLink);

// POST /student/reset-password/:studentid

router.post("/student/reset-password/:id"  , isAuthenticated, studentResetPassword);

// POST /student/update/:studentid

router.post("/student/update/:id"  , isAuthenticated, studentUpdate);

// POST /student/avatar/:studentid

router.post("/student/avatar/:id"  , isAuthenticated, studentAvatar);


//======================== apply Internship ==============

// POST /student/apply/internship/:internshipid

router.post("/student/apply/internship/:id"  , isAuthenticated, applyInternship);


//======================= apply job internship ==================

// POST /student/apply/job/:jobid

router.post("/student/apply/job/:id"  , isAuthenticated, applyJob);

module.exports = router;
