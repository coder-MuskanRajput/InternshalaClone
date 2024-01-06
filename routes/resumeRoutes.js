const express = require("express");
const router = express.Router();

const {
    resume, 
    addEducation ,
    editEducation ,
    deleteEducation,
    addJobs,
    editJobs,
    deleteJobs,
    addIntern,
    editIntern,
    deleteIntern,
    addResponsibilities,
    editResponsibilities,
    deleteResponsibilities,
    addCourse,
    editCourse,
    deleteCourse,
    addProject,
    editProject,
    deleteProject,
    addSkills,
    editSkills,
    deleteSkills,
    addAccomplishments,
    editAccomplishments,
    deleteAccomplishments,

} = require("../controllers/resumeController");
const { isAuthenticated } = require("../middlewares/auth");


// GET /
router.get("/" ,isAuthenticated, resume)



//====================  Education Routes ================================
//POST 

router.post("/add-edu" , isAuthenticated , addEducation )

//POST 

router.post("/edit-edu/:eduid" , isAuthenticated , editEducation )

//POST 

router.post("/delete-edu/:eduid" , isAuthenticated , deleteEducation)


// ======================= Jobs Routes ===========================

//POST 

router.post("/add-jobs" , isAuthenticated , addJobs )

//POST 

router.post("/edit-jobs/:jobid" , isAuthenticated , editJobs )

//POST 

router.post("/delete-jobs/:jobid" , isAuthenticated , deleteJobs)

//========================= Internship Routes ========================

//POST 

router.post("/add-internship" , isAuthenticated , addIntern )

//POST 

router.post("/edit-internship/:internid" , isAuthenticated , editIntern )

//POST 

router.post("/delete-internship/:internid" , isAuthenticated , deleteIntern)

//========================= Responsibilities Routes ========================

//POST 

router.post("/add-responsibilities" , isAuthenticated , addResponsibilities )

//POST 

router.post("/edit-responsibilities/:resid" , isAuthenticated , editResponsibilities )

//POST 

router.post("/delete-responsibilities/:resid" , isAuthenticated , deleteResponsibilities)

//========================== Courses Routes ================================

//POST 

router.post("/add-courses" , isAuthenticated , addCourse )

//POST 

router.post("/edit-courses/:courseid" , isAuthenticated , editCourse )

//POST 

router.post("/delete-courses/:courseid" , isAuthenticated , deleteCourse)

//=========================== Projects Routes =============================

//POST 

router.post("/add-projects" , isAuthenticated , addProject )

//POST 

router.post("/edit-projects/:projectid" , isAuthenticated , editProject )

//POST 

router.post("/delete-projects/:projectid" , isAuthenticated , deleteProject)


//========================== Skills routes ================================

//POST 

router.post("/add-skills" , isAuthenticated , addSkills )

//POST 

router.post("/edit-skills/:skillsid" , isAuthenticated , editSkills )

//POST 

router.post("/delete-skills/:skillsid" , isAuthenticated , deleteSkills)


//============================ Accomplishments Routes ===========================
//POST 

router.post("/add-accomplishments" , isAuthenticated , addAccomplishments )

//POST 

router.post("/edit-accomplishments/:accomid" , isAuthenticated , editAccomplishments )

//POST 

router.post("/delete-accomplishments/:accomid" , isAuthenticated , deleteAccomplishments)


module.exports = router;
