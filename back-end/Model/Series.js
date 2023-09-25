const mongoose = require("mongoose")

const SeriesSchema = new mongoose.Schema({
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

const Seires = mongoose.model("series", SeriesSchema)
module.exports = Seires