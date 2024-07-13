let mongoose=require("mongoose")
function connect(){
mongoose.connect('mongodb://ankit:ankit%40966@127.0.0.1:27017/Userdetails',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  socketTimeoutMS: 45000, // Increase socket timeout to 45 seconds
}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
}
module.exports=connect
