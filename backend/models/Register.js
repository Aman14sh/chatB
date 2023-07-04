const mongoose=require("mongoose")
const Register= new mongoose.Schema(
    {
        username:{
            type:String,
            maxLength:50,
        },
        email:{
            type:String,
        
        },
        password:{
            type:String,
        },
        imgUrl:{
           type:String,
        }
    }
)
module.exports=mongoose.model("Register",Register);