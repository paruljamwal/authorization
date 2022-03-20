const express=require("express");
const usercontroller=require("./controller/usercontroller")
const {register,login}=require("./controller/authcontroler");
const productcontroller=require("./controller/productcontroller")
const app=express();

app.use(express.json());
app.use("/user",usercontroller);

//directly go to register

app.post("/register",register);

// directly goto login

app.post("/login",login);

app.use("/product",productcontroller);

module.exports=app;