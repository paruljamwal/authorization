const mongoose=require("mongoose");

const connect=()=>{
    console.log("Happy Happy Keep smile I am Connected");
    return mongoose.connect("mongodb+srv://parul:paru@cluster0.x6mag.mongodb.net/authon?retryWrites=true&w=majority")

}
module.exports=connect;