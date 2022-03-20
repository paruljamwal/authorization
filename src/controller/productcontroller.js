const express=require("express");
const router=express.Router();
const productModel=require("../model/productmodel");
const authenticate=require("../middleware/authencate");
router.post("",authenticate,async(req,res)=>{
   console.log(req);
   req.body.user_id=req.user._id 
try{
 const product=await productModel.create(req.body)
 return res.status(202).send(product);
}
catch(err){
    return res.send("err")
}




});
module.exports=router;
