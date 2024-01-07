const mongoose = require("mongoose");

const internshipModel  = new mongoose.Schema(
    {
        student : { type : mongoose.Schema.Types.ObjectId , ref: "student"},
        employee : { type : mongoose.Schema.Types.ObjectId , ref: "employee"},
        profile :  String ,
        skill : String,
        internshiptype :{
            type : String ,
            enum : ["In Office" , "Remote"]
        }, 
        openings : Number,
        from : String,
        to :String,
        duration : String,
        responsibility : String,
        stipend :{
            status : {
                type :String ,
                enum :["Fixed" , "Negotiable" , "Performance based" , "Unpaid"]
            },
            amount : Number,
        },
        perks : String,
        assesments : String,

    } , {timestamps : true}
);

const internship = mongoose.model("internship" , internshipModel) ;
module.exports = internship;