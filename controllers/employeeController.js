const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Employee = require("../models/employeeModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImagekit()

exports.homepage = catchAsyncErrors(async (req,res,next) => {
    res.json({message : "Secure Employee Homepage!"}); 
});

exports.currentEmployee = catchAsyncErrors(async (req,res,next) => {
    const employee = await Employee.findById(req.id).exec();
    res.json({employee})
})

exports.employeesignup = catchAsyncErrors(async (req,res,next) =>{
    // res.json(req.body);
    const employee = await new Employee(req.body).save();
    sendtoken(employee , 201 , res)
    // res.status(201).json(employee);
})

exports.employeesignin = catchAsyncErrors(async (req,res,next) =>{
    // res.json(req.body)

    const employee = await Employee
    .findOne({email : req.body.email})
    .select("+password")
    .exec();
        console.log(req.body);
    if(!employee) 
    return next(
        new ErrorHandler("User not found with this email address" , 404)
        );
     
    const isMatch = employee.comparepassword(req.body.password)
  if(!isMatch ) return next (new ErrorHandler("Wrong Credentials" , 500));
    // res.json(employee)
    sendtoken(employee , 200 , res)
})

exports.employeesignout = catchAsyncErrors(async (req,res,next) =>{
    
    res.clearCookie("token");
    res.json({message : `Please login to access the resources` ,
              errName : "Error"})
})

// exports.employeesendmail = catchAsyncErrors(async (req,res,next) => {
//     const employee = await employee.findOne({email : req.body.email}).exec();
//      console.log(employee);
//     if(!employee) 
//     return next(
//         new ErrorHandler("User not found with this email address" , 404)
//         );

//     const url = `${req.protocol}://${req.get("host")}/employee/forget-link/${employee._id}`;
//     sendmail(req,res,next,url);
//     employee.resetPasswordToken = "1";
//     await employee.save();
//     res.json({employee , url}); 
// });

// exports.employeeforgetlink = catchAsyncErrors(async (req,res,next) => {
//     const employee = await employee.findById(req.params.id).exec();

//     if(!employee) 
//     return next(
//         new ErrorHandler("User not found with this email address" , 404)
//         );
//     if(employee.resetPasswordToken == "1"){
//         employee.resetPasswordToken = "0";
//         employee.password = req.body.password;
//     }
//     else{
//         return next(
//             new ErrorHandler("Invalid Reset Password Link! Please try again" , 500)
//         )
//     }
//     await employee.save();

//     res.status(200).json({
//         message : "Password has been successfully changed"
//     })
// });

// exports.employeeresetpassword = catchAsyncErrors(async (req,res,next) => {
//     const employee = await employee.findById(req.params.id).exec();

//         employee.password = req.body.password;
    
//     await employee.save();

//     sendtoken(employee , 201 , res)
    
// });

// exports.employeeupdate = catchAsyncErrors(async (req,res,next) =>{
//     await employee.findByIdAndUpdate(req.params.id , req.body).exec();
//     res.status(200).json({
//         success : true , 
//         message : "employee Updated Successfully !",
//     })
// })

// exports.employeeavatar = catchAsyncErrors(async (req,res,next) =>{
//     const employee = await employee.findById(req.params.id).exec()
//     const file = req.files.avatar;
//     const modifiedFileName =`resumebuilder-${Date.now()}${path.extname(file.name)}`;


//      // purani file delete krke new file update krne k liye

//     if(employee.avatar.fileId !== ""){
//         await imagekit.deleteFile(employee.avatar.fileId);
//      }

//     ///
//     const {fileId , url} = await imagekit.upload({
//         file : file.data,
//         fileName : modifiedFileName
//     });
//     employee.avatar = {fileId , url};
//     await employee.save();
//     // res.json({image});
//     res.status(200).json({
//         success : true , 
//         message : "employee Avatar Uploaded Successfully !",
//     })
// })