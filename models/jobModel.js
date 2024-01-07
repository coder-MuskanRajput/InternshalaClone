const mongoose = require("mongoose");

const jobModel  = new mongoose.Schema(
    {
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
        assesments : String,

    } , {timestamps : true}
);

const job = mongoose.model("job" , jobModel) ;
module.exports = job;