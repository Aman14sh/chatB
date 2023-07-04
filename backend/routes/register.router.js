const express =require("express")
const router=express.Router();
const multer  = require('multer')
var path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, (file.originalname)) 
  }
})

const upload = multer({ storage: storage });


const {registerfun}=require("../controller/register.controller")
const {imageUpload}=require("../controller/register.controller")
router.post("/register",upload.single('file'),imageUpload );

module.exports=router;