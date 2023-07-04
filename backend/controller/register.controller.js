const mongoose = require('mongoose');
const Register=require('../models/Register')
const cloudinary=require('cloudinary').v2
exports.registerfun= async (req,res) => 
{
  try{
    const {username,email,password}=req.body;
    console.log(req.body);
    console.log(req.file);

    const response=await Register.create({username,email,password});

    res.status(200).json(
        {success:true,
        data:response,
        message:"Entry created succesfully", 
        }
    );
  } 
  catch(e){
    console.error(e);
    console.log(e);
    res.status(500)
    .json({
        success:false,
        data:"Internal server error",
        message:err.message,
    }) 
  }
}
function isfileTypeSupported(type,supportedType){
  return supportedType.includes(type);
}
async function uploadFiletoCloudy(file,folder){
  const options={folder};
  console.log(options);
  return await cloudinary.uploader.upload(file.path,options);
}
exports.imageUpload = async(req,res) =>{
  try{
    const {username,email,password}=req.body;
    console.log(username,email,password);
    const file=req.file;
    console.log(file);

    //validation
    const supportedType =["jpg","jpeg","png"]
    const fileType=file.originalname.split('.')[1].toLowerCase(); 
    console.log(fileType);
    if(!isfileTypeSupported(fileType,supportedType)){
      return res.status(400).json({
        sucess:false,
        message:"file format not supported"
      })
    }
    const response=await uploadFiletoCloudy(file,"chat");
    console.log(response);

    const fileData =await Register.create({
      username,
      email,
      password,
      imgUrl:response.secure_url,
    })
    res.json({
      sucess:true,
      message:"Great Sucesss",
    })


  }
  catch(e){
    console.error(e);
    res.status(400).json({
      sucess:false,
      message:"something went wrong",
    });

  }
} 
