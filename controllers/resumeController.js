const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume =  catchAsyncErrors(async(req,res,next) => {
    const {resume} = await Student.findById(req.id).exec();
    res.json({message : "Secure Resume Page!",resume})
})

//========================= Education Crud ==================

exports.addEducation =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Education Added "})
})

exports.editEducation =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex((e) =>e.id === req.params.eduid);
    student.resume.education[eduIndex] =
     {...student.resume.education[eduIndex], ...req.body} 
    await student.save();

    res.json({message : "Education Updated "})
})

exports.deleteEducation =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredEducation = student.resume.education.filter((e) =>e.id !== req.params.eduid);
    student.resume.education = filteredEducation
    await student.save();

    res.json({message : "Education Deleted "})
})

//========================= Jobs Crud ==================

exports.addJobs =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.jobs.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Jobs Added "})
})

exports.editJobs =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const jobsIndex = student.resume.jobs.findIndex((e) =>e.id === req.params.jobid);
    student.resume.jobs[jobsIndex] =
     {...student.resume.jobs[jobsIndex], ...req.body} 
    await student.save();

    res.json({message : "Jobs Updated "})
})

exports.deleteJobs =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredJobs = student.resume.jobs.filter((e) =>e.id !== req.params.jobid);
    student.resume.education = filteredJobs
    await student.save();

    res.json({message : "Jobs Deleted"})
})

//========================= Internship Crud ==================

exports.addIntern =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.internship.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Internship Added "})
})

exports.editIntern =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const internIndex = student.resume.internship.findIndex((e) =>e.id === req.params.internid);
    student.resume.internship[internIndex] =
     {...student.resume.internship[internIndex], ...req.body} 
    await student.save();

    res.json({message : "Internship Updated "})
})

exports.deleteIntern =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredIntern = student.resume.internship.filter((e) =>e.id !== req.params.internid);
    student.resume.education = filteredIntern
    await student.save();

    res.json({message : "Internship Deleted "})
})

//========================= Responsibilities Crud ==========================

exports.addResponsibilities =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.responsibilities.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Responsibilities Added "})
})

exports.editResponsibilities =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const resIndex = student.resume.responsibilities.findIndex((e) =>e.id === req.params.resid);
    student.resume.responsibilities[resIndex] =
     {...student.resume.responsibilities[resIndex], ...req.body} 
    await student.save();
    res.json({message : "Responsibilities Updated "})
})

exports.deleteResponsibilities =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredResponsibilities = student.resume.responsibilities.filter((e) =>e.id !== req.params.resid);
    student.resume.education = filteredResponsibilities
    await student.save();
    res.json({message : "Responsibilities Deleted "})
})

//========================= Courses Crud ==================

exports.addCourse =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.courses.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Courses Added"})
})

exports.editCourse =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const courseIndex = student.resume.courses.findIndex((e) =>e.id === req.params.courseid);
    student.resume.courses[courseIndex] =
     {...student.resume.courses[courseIndex], ...req.body} 
    await student.save();

    res.json({message : "Courses Updated "})
})

exports.deleteCourse =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredCourse = student.resume.courses.filter((e) =>e.id !== req.params.courseid);
    student.resume.courses = filteredCourse
    await student.save();
    res.json({message : "Course Deleted "})
})

//=========================== Projects Crud =======================

exports.addProject =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.projects.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Projects Added "})
})

exports.editProject =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const projectIndex = student.resume.projects.findIndex((e) =>e.id === req.params.projectid);
    student.resume.projects[projectIndex] =
     {...student.resume.projects[projectIndex], ...req.body} 
    await student.save();
    res.json({message : "Projects Updated"})
})

exports.deleteProject = catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredProjects = student.resume.projects.filter((e) =>e.id !== req.params.projectid);
    student.resume.projects = filteredProjects
    await student.save();
    res.json({message : "Projects Deleted"})
})

//========================= Skills Crud ==================

exports.addSkills =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.skills.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Skills Added "})
})

exports.editSkills =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const skillsIndex = student.resume.skills.findIndex((e) =>e.id === req.params.skillsid);
    student.resume.skills[skillsIndex] =
     {...student.resume.skills[skillsIndex], ...req.body} 
    await student.save();

    res.json({message : "Skills Updated "})
})

exports.deleteSkills =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredSkills = student.resume.skills.filter((e) =>e.id !== req.params.skillsid);
    student.resume.skills = filteredSkills
    await student.save();

    res.json({message : "Skills Deleted "})
})

//=========================  Accomplishments Crud ==================

exports.addAccomplishments =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    student.resume.accomplishments.push({ ...req.body , id: uuidv4()});
    await student.save();
    res.json({message : "Education Added "})
})

exports.editAccomplishments =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.accomplishments.findIndex((e) =>e.id === req.params.accomid);
    student.resume.accomplishments[eduIndex] =
     {...student.resume.accomplishments[eduIndex], ...req.body} 
    await student.save();

    res.json({message : "Accomplishments Updated "})
})

exports.deleteAccomplishments =  catchAsyncErrors(async(req,res,next) => {
    const student = await Student.findById(req.id).exec();
    const filteredAccomplishments = student.resume.accomplishments.filter((e) =>e.id !== req.params.accomid);
    student.resume.accomplishments = filteredAccomplishments
    await student.save();

    res.json({message : "Accomplishments Deleted "})
})