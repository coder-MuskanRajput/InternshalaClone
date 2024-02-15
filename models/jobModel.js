const mongoose = require("mongoose");

const jobModel  = new mongoose.Schema(
    {
        students : [{ type : mongoose.Schema.Types.ObjectId , ref: "student"}],
        employee : { type : mongoose.Schema.Types.ObjectId , ref: "employee"},
        title :  String ,
        skill : String,
        jobType :{
            type : String ,
            enum : ["In Office" , "Remote"]
        }, 
        openings : Number,
        description : String,
        preferences :String,
        salary : Number,
        perks : String,
        assessments : String,

    } , {timestamps : true}
);

const job = mongoose.model("job" , jobModel) ;
module.exports = job;