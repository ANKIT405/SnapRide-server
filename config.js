let mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Userdetails").then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
