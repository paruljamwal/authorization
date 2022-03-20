//businee work inside it
const mongoose=require("mongoose");
const bcrypt = require('bcrypt');
const productschema=mongoose.Schema({
    title:{type:String,require:true},
    price:{type:Number,require:true},
    user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user",require:true}
},
{
    timestamps:true,
    versionKey:false
});


const productModel=mongoose.model("product",productschema);

module.exports=productModel;