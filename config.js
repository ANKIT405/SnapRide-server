let mongoose=require("mongoose")
function connect(){
mongoose.connect('mongodb+srv://Userdetails:q55FKZ6kBcVw4Btr@atlascluster.nn8yirt.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster').then(()=>{
    console.log("Database connected")
}).catch((err)=>{
  console.log("Problem occur", err)
})
}
module.exports=connect
