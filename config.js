let mongoose=require("mongoose")
function connect(){
mongoose.connect("mongodb://0.0.0.0:27017/Userdetails").then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
}
module.exports=connect
