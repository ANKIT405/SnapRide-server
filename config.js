let mongoose=require("mongoose")
function connect(){
mongoose.connect('mongodb+srv://UserDatabase:Ankit966@userdb.pamhqez.mongodb.net/?retryWrites=true&w=majority&appName=UserDB').then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
}
module.exports=connect
