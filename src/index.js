const express=require("express");
const usercontroller=require("./controller/usercontroller")
const {register,login,generatetoken}=require("./controller/authcontroler");
const productcontroller=require("./controller/productcontroller")
const app=express();
const passport=require("../src/config/googleauth")
app.use(express.json());
app.use("/user",usercontroller);

//directly go to register

app.post("/register",register);

// directly goto login

app.post("/login",login);

app.use("/product",productcontroller);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile',"email"] }));
 
app.get(
    '/auth/google/callback', //route
  passport.authenticate('google', { failureRedirect: '/login', session:false}),
  function(req, res) {
      //generate token
const token=generatetoken(req.user);
    // Successful authentication, redirect home.
    return res.status(200).send({user:req.user,token});
  });

module.exports=app;