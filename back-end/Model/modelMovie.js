const mongoose = require("mongoose")



const MovieSchema  = new mongoose.Schema({
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


const Movie  = mongoose.model("movie",MovieSchema)

module.exports = Movie