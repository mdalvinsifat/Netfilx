const mongoose = require("mongoose")



const ProductSchema = new mongoose.Schema({
    name:{
type:String
    },
    title:{
type:String
    },
    img:{
type:String
    },
    detelis:{
type:String
    },
    rating:{
type:String
    },
})


const Product = mongoose.model("userModel",ProductSchema)

module.exports = Product