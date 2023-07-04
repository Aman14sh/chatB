const mongoose=require("mongoose")
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        //useFindAndModify:false,
        useUnifiedTopology:true,

    })
    .then(() =>{
        console.log("Db connect Sucessfull");
    })
    .catch(()=>{
        console.log("Isue in connection")
        console.error(error.message);
        process.exit(1);
    })
}

module.exports = dbConnect;