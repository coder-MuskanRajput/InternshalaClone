const express = require("express");
const router = express.Router();

const {resume, addEducation , editEducation , deleteEducation} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");


// GET /
router.get("/" ,isAuthenticated, resume)


//POST 

router.post("/add-edu" , isAuthenticated , addEducation )

//POST 

router.post("/edit-edu/:eduid" , isAuthenticated , editEducation )

//POST 

router.post("/delete-edu/:eduid" , isAuthenticated , deleteEducation)


module.exports = router;
