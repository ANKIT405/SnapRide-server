let mongoose=require("mongoose")

let schema=new mongoose.Schema({
      name:String,
      email:String,
      password:String,
      mob:Number
})

let Collection=mongoose.model("userdatas",schema)

module.exports=Collection
