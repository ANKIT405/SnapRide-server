let mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/Userdetails").then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
