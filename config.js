let mongoose=require("mongoose")
function connect(){
mongoose.connect('mongodb://ankit:ankit%40966@127.0.0.1:27017/Userdetails').then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
}
module.exports=connect
