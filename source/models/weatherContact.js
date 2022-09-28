const mongoose=require("mongoose");

const WeatherContactSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
      },
    subject:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        required:true,
        
    },
})





//collection creation
const weatherContact =new mongoose.model("weatherContact",WeatherContactSchema)

module.exports=weatherContact;