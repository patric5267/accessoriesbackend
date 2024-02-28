const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const cart = mongoose.model("CART" , cartSchema)
module.exports=cart