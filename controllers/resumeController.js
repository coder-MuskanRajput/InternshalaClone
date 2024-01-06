const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');


exports.resume =  catchAsyncErrors(async(req,res,next) => {
    const {resume} = await Student.findById(req.id).exec();
    res.json({message : "Secure Resume Page!",resume})
})

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