const express = require('express')
const app=express()
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const cors = require('cors')
app.use(cors())
app.use(express.json())
const register=require("./routes/register.router")
app.use("/api/v1",register)
const dbConnect=require("./config/database");
dbConnect();
const cloudinary=require("./config/cloudinary");
cloudinary.cloudinaryConnect();

app.listen(PORT,() => {
    console.log(`Server listening at ${PORT}...`);
})


app.get("/",(req,res) =>{
     res.send('<h1>This is home page</h1>')
})