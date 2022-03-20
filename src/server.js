const connect=require("../src/config/dbs");
const app=require("./index");

app.listen(2222,async()=>{
 try{
  console.log("Listining the port 2222");
  return await connect();
  

 }
 catch(err){
     console.log(err);
 }


});